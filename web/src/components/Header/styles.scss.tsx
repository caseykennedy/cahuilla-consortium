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
  /* background: ${theme.colors.primary}; */
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.15);
  backdrop-filter: blur(7px);
  position: sticky;
  top: 0;
  left: 0;

  padding: 0 ${theme.space[4]};
  height: ${theme.headerHeight};
  width: 100%;
  z-index: 999;

  @media ${theme.mq.tablet} {
    background: ${p => (p.isIndex ? theme.colors.background : 'transparent')};
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
      svg {
        width: 45px;
      }
    }

    .wordmark {
      display: flex;
      margin-left: ${theme.space[1]};

      @media ${theme.mq.tablet} {
        display: none;
      }

      @media ${theme.mq.desktop} {
        display: flex;
      }

      svg {
        width: 90px;
        transform: scale(0.9);
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
