import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    letter-spacing: 2px
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif, Open Sans, Ubuntu Mono;
    transition: all 0.50s linear;
  }
  `
