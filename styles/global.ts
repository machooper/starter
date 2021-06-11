import {createGlobalStyle} from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    width: 100vw;
    min-height: 100vh;
    font-family: ${theme.typography.fonts.body};
    font-weight: ${theme.typography.weights.regular};
    font-size: ${theme.typography.sizes[0]};
    line-height: ${theme.typography.lineheight};
    color: ${theme.colors.black[0]};
    background: ${theme.colors.white[0]};
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fonts.head};
  }
  a, button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
      color: ${theme.colors.primary[0]};
    }
  }
  ul, ol, dd {
    list-style: none;
  }
  @media(min-width: 1360px) {
    html, body {
      font-size: ${theme.typography.sizes[0]}
    }
  }
  @media(min-width: 1920px) {
    html, body {
      font-size: ${theme.typography.sizes[1]}
    }
  }
`

export default GlobalStyles