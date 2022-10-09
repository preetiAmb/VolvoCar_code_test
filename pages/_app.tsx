import React from "react";
import "../public/css/styles.css";
import { StyleProvider, ThemePicker } from "vcc-ui";
import type { AppProps } from "next/app";

function HomePage({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
        <StyleProvider>
          <Component {...pageProps} />
        </StyleProvider>
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;