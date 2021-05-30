import { HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { parseCookies } from 'nookies'

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_APP_API}/graphql`,
  credentials: "include",
});

const authMiddleware = setContext(async (_, { headers }) => {
  let cookies = parseCookies();

  const { 'noploy.token': token } = cookies;

  if (token)
    return {
      headers: {
        ...headers,
        Authorization: 'Bearer ' + token,
      },
    };
  return {
    headers: {
      ...headers,
    },
  };

});

export const client = new ApolloClient({
  link: authMiddleware.concat(httpLink),//.concat(link),
  cache: new InMemoryCache({
    resultCaching: true,
    dataIdFromObject: (o) => (o.key ? "" + o.key : undefined),
    // possibleTypes: Introspection,
  }),
});

export default function Graphql({ children }: any) {
  return (
    <ApolloProvider client={client}>{children}</ApolloProvider>
  );
};
