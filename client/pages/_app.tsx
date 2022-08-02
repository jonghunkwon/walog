import type { ReactElement, ReactNode } from "react";
import { ThemeProvider } from '@emotion/react'
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/globalStyles";
import Layout from "../components/Layout";
import theme from "../styles/theme";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
