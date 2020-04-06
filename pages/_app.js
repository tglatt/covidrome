import theme from "../src/ui/theme";
import App from "next/app";
import React from "react";
import { ThemeProvider } from "theme-ui";

class MyApp extends App {
  static async getInitialProps(appContext) {
    const { Component, ctx } = appContext;

    let pageProps = {};

    if (!Component.getInitialProps) {
      return { pageProps };
    }

    try {
      pageProps = await Component.getInitialProps(ctx);
    } catch (e) {
      // TODO(tglatt): send error to sentry
      // Sentry.captureException(e, ctx);
      throw e;
    }

    return { pageProps };
  }

  componentDidMount() {
    // initMatomo();
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
