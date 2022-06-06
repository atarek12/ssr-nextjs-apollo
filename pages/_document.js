import { getDataFromTree } from "@apollo/client/react/ssr";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  constructor(props) {
    super(props);
    const { __NEXT_DATA__, apolloState } = props;
    __NEXT_DATA__.apolloState = apolloState;
  }

  static async getInitialProps(ctx) {
    const { apolloClient, renderPage } = ctx;
    const originalRenderPage = renderPage;

    try {
      await getDataFromTree(
        <ctx.AppTree serverApolloClient={apolloClient} pageProps={{}} />
      );
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            <App serverApolloClient={apolloClient} {...props} />,
        });

      const initialProps = await Document.getInitialProps(ctx);
      const apolloState = apolloClient.extract();
      return {
        ...initialProps,
        apolloState,
      };
    } catch (error) {
      console.log(error);
    } finally {
      apolloClient.resetStore();
      apolloClient.cache.reset();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
