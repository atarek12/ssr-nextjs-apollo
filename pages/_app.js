import { ApolloProvider } from "@apollo/client";
import Link from "next/link";
import { getApolloClient } from "../apollo/getApolloClient";

function MyApp(props) {
  const { Component, pageProps, serverApolloClient } = props;
  const apolloClient = serverApolloClient || getApolloClient().apolloClient;

  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <nav>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/use-query">
              <a>Using useQuery</a>
            </Link>
          </li>
          <li>
            <Link href="/use-query-standby">
              <a>Using useQuery with fetchPolicy: standby</a>
            </Link>
          </li>
          <li>
            <Link href="/use-lazy-query">
              <a>Using useLazyQuery</a>
            </Link>
          </li>
        </nav>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    const { apolloClient } = getApolloClient(true);
    appContext.ctx.apolloClient = apolloClient;
  }

  return {};
};

export default MyApp;
