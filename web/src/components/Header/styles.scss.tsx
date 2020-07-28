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
  position: absolute;
  width: 100vw;
  height: ${theme.headerHeight};
  z-index: 999;

  color: ${theme.colors.white};

  @media ${theme.mq.tablet} {
    width: 50vw;
  }
`

export const Logo = styled(Flex)`
  padding: ${theme.space[4]};

  @media ${theme.mq.tablet} {
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};

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
  justify-content: space-between;
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
  align-items: flex-start;
  box-sizing: content-box;
  padding: ${theme.space[4]};

  color: ${theme.colors.text};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  cursor: pointer;

  @media ${theme.mq.desktop} {
    display: none;
  }

  span {
    svg {
      width: ${theme.space[4]};
    }
  }
`
