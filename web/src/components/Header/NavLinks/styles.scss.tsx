// Navigation Styles:

// _____________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../../gatsby-plugin-theme-ui'
// Elements
import { Flex, AnimatedFlex } from '../../ui'

// Begin Styles
// _____________________________________________________________

export const NavLinks = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: calc(${theme.headerHeight} + ${theme.space[4]});
  width: 100%;
  z-index: 999;
`

export const NavLink = styled(AnimatedFlex)`
  padding: ${theme.space[4]};
  width: 100%;

  a {
    mix-blend-mode: difference;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes[3]};
    text-transform: uppercase;
    width: 100%;
  }
`
