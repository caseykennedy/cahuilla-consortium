// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../../../config/theme'
// Elements
import { Flex, AnimatedFlex } from '../../ui'

// Begin Styles
// ___________________________________________________________________

export const NavLinks = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;

  height: 100%;
  width: 100%;
  z-index: 999;
`

export const NavLink = styled(AnimatedFlex)`
  /* justify-content: center; */
  flex-direction: column;
  width: 100%;

  .nav-mobile {
    &__link {
      color: ${theme.colors.text};
      font-size: ${theme.fontSizes[3]};
      text-transform: uppercase;
      padding: ${theme.space[3]};
    }
  }
`

// ___________________________________________________________________ Styles
