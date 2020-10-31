// Header Styles:

// ___________________________________________________________________

// Core
import { Link } from 'gatsby'
import styled from 'styled-components'
import { readableColor, darken } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex, AnimatedFlex } from '../ui'

// ___________________________________________________________________

export const Header = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;

  background: ${theme.colors.primary};
  position: sticky;
  top: 0;
  left: 0;
  margin-top: -${theme.headerHeight};

  width: 100%;
  z-index: 999;

  color: ${theme.colors.white};

  @media ${theme.mq.tablet} {
    background: transparent;
    height: ${theme.headerHeight};
    width: 50%;
  }
`

export const Logo = styled(Flex)`
  padding: ${theme.space[4]} 0 ${theme.space[4]} ${theme.space[4]};

  @media ${theme.mq.tablet} {
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    /* mix-blend-mode: difference; */

    svg {
      fill: ${theme.colors.white};
    }

    .symbol {
      svg {
        width: 45px;
      }
    }

    .wordmark {
      margin-left: ${theme.space[2]};

      svg {
        width: 90px;
      }
    }
  }
`

export const Tools = styled(Flex)`
  justify-content: flex-end;
  flex: 1;
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
  padding: 0 ${theme.space[4]} ${theme.space[4]} 0;
  cursor: pointer;

  @media (min-width: 1100px) {
    display: none;
  }

  span {
    svg {
      fill: ${theme.colors.white};
      width: ${theme.space[4]};
    }
  }
`
