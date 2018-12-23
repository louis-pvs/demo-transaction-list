import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

const defaultTheme = {
  $color: {
    baseWhite: "#fff",
    baseBlack: "#000",
    text: "#333",
    text__light: "#999",
    primary: "rebeccapurple",
    primary__light: "#9760ca",
    primary__dark: "#36036a",
    background: "#F7F9FB",
    background__dark: "#EEEFF2",
    border: "#eee"
  },
  $size: {
    xs: "0.5rem",
    sm: "0.75rem",
    reg: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
    display__1: "5rem",
    display__2: "3rem",
    display__3: "2rem"
  }
};

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  body {
    background-color: ${defaultTheme.$color.background};
    font: 16px Helvetica, Arial;
    color: ${defaultTheme.$color.text}
  }
  h5, p {
    margin: 0
  }
  small {
    font-size: 0.75em
  }
  a {
    color: ${defaultTheme.$color.primary};
    text-decoration: none;
    &:visited {
      color: ${defaultTheme.$color.primary__light};
      text-decoration: none;
    }
  }
`;
export default defaultTheme;
