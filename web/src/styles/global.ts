// Global styles

// _____________________________________________________________

import { createGlobalStyle } from 'styled-components'

import theme from '../gatsby-plugin-theme-ui'

import RootVars from './root'
import Reset from './reset'
import Typography from './typography'

// _____________________________________________________________

const GlobalStyles = createGlobalStyle`
  ${RootVars}
  ${Reset}
  ${Typography}
  
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    
    border: 0;
    margin: 0;
    padding: 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .img {
    width: 100%;
    height: 100%;
  }

  hr {
    border-top: ${theme.border};
    border-bottom: none;
  }


`

export default GlobalStyles
