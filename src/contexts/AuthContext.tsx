import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from "next/router";
import { api } from './../services/api';
import { useQuery } from "@apollo/client";
import { PROFILE } from './../graphql/profile/queries/profile';

type SignInCredentials = {
  email: string;
  password: string;
}

type User = {
  email: string;
  name: string;
};


type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: User;
}

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, 'noploy.token');
  destroyCookie(undefined, 'noploy.refreshToken');
  Router.push('/');
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;

  const { 'noploy.token': token } = parseCookies();

  if (token) {
    const { loading, error, data } = useQuery(PROFILE);
    if (loading) {
      return null;
    }
    if (error) {
      signOut();
      console.log(error.message, 'message de erro');
    }
    setUser(data.profile);
  }



  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('/auth/login', {
        email,
        password
      });

      const { access_token, refresh_token } = response.data;

      setCookie(undefined, 'noploy.token', access_token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      });

      setCookie(undefined, 'noploy.refreshToken', refresh_token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      });

      api.defaults.headers['Authorization'] = `Bearer ${access_token}`;

      setUser(true)

      Router.push('/');

    } catch (err) {
      return err
    }
  }


  return (
    <AuthContext.Provider value={{ signIn, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}