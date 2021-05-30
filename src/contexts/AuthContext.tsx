import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import Router from "next/router";
import { api } from './../services/api';

type SignInCredentials = {
  email: string;
  password: string;
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
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

  useEffect(() => {
    const { 'noploy.token': token } = parseCookies();

    // try catch para verificar se o token dele é valido

    // if (token) {
    //   api.get('me').then(response => {
    //     const { email, permissions, roles } = response.data;

    //     setUser(true);
    //   }).catch(() => {
    //     signOut()
    //   });
    // }

    // se der catch. Deslogue o usuário. signOut()

  }, []);

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
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}