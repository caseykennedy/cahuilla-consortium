// Global styles

// ___________________________________________________________________

import { createGlobalStyle } from 'styled-components'

import theme from '../../config/theme'

import RootVars from './root'
import Reset from './reset'
import Typography from './typography'

// ___________________________________________________________________

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
    border-top: 1px solid ${theme.colors.gray};
    border-bottom: none;
  }


`

export default GlobalStyles
