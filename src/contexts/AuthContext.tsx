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
  subscriptions: string[];
  permissions: string[];
};


type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: User;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  destroyCookie(undefined, 'noploy.token');
  destroyCookie(undefined, 'noploy.refreshToken');
  Router.push('/login');
}

export function AuthProvider({ children }) {
  const { loading, error, data } = useQuery(PROFILE);
  const [isAuthenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    if (error) {
      signOut();
    }
  }, [error]);

  useEffect(() => {
    if (!loading && !error && data) {
      setAuthenticated(!loading && data && data.profile)
    }
  }, [data])

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

      setAuthenticated(true)

      Router.push('/');
    } catch (err) {
      console.log('errorAuth: ', err);
      return err
    }
  }


  return (
    <AuthContext.Provider value={{ signIn, user: data?.profile, isAuthenticated, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}