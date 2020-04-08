import theme from "../src/ui/theme";
import App from "next/app";
import React from "react";
import { ThemeProvider } from "theme-ui";

class MyApp extends App {
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
