import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const defaultTheme = {
  textColor: "#333",
  textColor__light: "#bbb",
  primaryColor: "rebeccapurple"
};

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  body {
    font: 16px Helvetica, Arial;
    color: ${defaultTheme.textColor}
  }
`;
export default defaultTheme;
