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

if (typeof module.hot !== "undefined") {
  module.hot.accept();
}
