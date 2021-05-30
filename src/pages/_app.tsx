import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from "next/app"
import { AuthProvider } from './../contexts/AuthContext';
import Graphql from "../services/Graphql";
import theme from './../../styles/theme';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Graphql>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </Graphql>
    </ChakraProvider>
  )
}

export default MyApp
