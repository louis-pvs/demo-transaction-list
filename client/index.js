import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import theme, { GlobalStyle } from "./src/styles/theme";
import App from "./src/components/App";

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Fragment>,
  document.getElementById("root")
);

if (
  process.env.NODE_ENV === "production" &&
  typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object"
) {
  for (let [key, value] of Object.entries(
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__
  )) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] =
      typeof value == "function" ? () => {} : null;
  }
}

if (typeof module.hot !== "undefined") {
  module.hot.accept();
}
