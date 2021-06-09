import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    width: 100vw;
    min-height: 100vh;
    font-family: ${props => props.theme.typography.fonts.body};
    font-weight: ${props => props.theme.typography.weights.regular};
    font-size: ${props => props.theme.typography.sizes[0]};
    line-height: ${props => props.theme.typography.lineheight};
    color: ${props => props.theme.colors.black[0]};
    background: ${props => props.theme.colors.white[0]};
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.typography.fonts.head};
  }
  a{
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
      color: ${props => props.theme.colors.primary[0]};
    }
  }
  @media(min-width: 1360px) {
    html, body {
      font-size: ${props => props.theme.typography.sizes[0]}
    }
  }
  @media(min-width: 1920px) {
    html, body {
      font-size: ${props => props.theme.typography.sizes[1]}
    }
  }
`
export default GlobalStyles