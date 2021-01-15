import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #ffffff;
    /* font-family: Roboto, Sans-Serif; */
    font-family: var(--font-family-apple)!important;
  }
`

export default GlobalStyle
