// Header Styles:

// _____________________________________________________________

// Core
import styled from 'styled-components'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Flex } from '../ui'

// _____________________________________________________________

export const Header = styled(Flex)<{ isIndex: boolean }>`
  flex-direction: row;
  flex-wrap: wrap;

  /* mix-blend-mode: difference; */
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.15);
  backdrop-filter: blur(7px);
  position: fixed;
  top: 0;

  padding: 0 ${theme.space[4]};
  height: ${theme.headerHeight};
  width: 100%;
  z-index: 9999;

  background: ${p => (p.isIndex ? theme.colors.background : 'transparent')};

  @media ${theme.mq.tablet} {
    position: sticky;
    width: ${p => (p.isIndex ? '100%' : '50%')};
  }
`

export const Logo = styled(Flex)`
  height: ${theme.headerHeight};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.text};
    /* mix-blend-mode: difference; */

    svg {
      fill: ${theme.colors.text};
      /* mix-blend-mode: difference; */
    }

    .symbol {
      /* mix-blend-mode: difference; */

      svg {
        /* mix-blend-mode: difference; */
        width: 45px;

        path {
          /* mix-blend-mode: difference; */
        }
      }
    }

    .wordmark {
      display: flex;
      margin-left: ${theme.space[2]};

      @media ${theme.mq.tablet} {
        display: none;
      }

      @media ${theme.mq.desktop} {
        display: flex;
      }

      svg {
        width: 90px;
      }
    }
  }
`

export const Tools = styled(Flex)`
  justify-content: flex-end;
  flex: 1;
  height: ${theme.headerHeight};
`

// export const Nav = styled(Flex)`
//   flex: 1;
//   display: none;
//   justify-content: flex-end;

//   @media ${theme.mq.desktop} {
//     display: flex;
//   }

//   .cta {
//     /* display: none; */

//     @media ${theme.mq.desktop} {
//       display: initial;
//     }
//   }
// `

export const Toggle = styled.div`
  display: flex;
  /* align-items: center; */
  box-sizing: content-box;
  cursor: pointer;

  @media ${theme.mq.tablet} {
    display: none;
  }

  span {
    svg {
      /* fill: ${theme.colors.black}; */
      width: ${theme.space[4]};
    }
  }
`
