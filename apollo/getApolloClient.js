import { ApolloClient, InMemoryCache } from "@apollo/client";

const isServer = typeof window === "undefined";
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;
let apolloClient;

export function getApolloClient(isServer = false) {
  if (!isServer && apolloClient) {
    return { apolloClient };
  }

  const client = new ApolloClient({
    uri: "https://api.graphqlplaceholder.com/",
    ssrMode: isServer,
    cache: new InMemoryCache().restore(windowApolloState || {}),
  });

  if (isServer) {
    return { apolloClient: client };
  }

  global.apolloClient = client;
  apolloClient = client;
  return { apolloClient };
}
