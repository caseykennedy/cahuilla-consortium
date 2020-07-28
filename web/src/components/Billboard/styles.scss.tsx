// Billboard Styles:

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

export const Billboard = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;

  padding-top: calc(${theme.headerHeight} + ${theme.space[7]});
  position: relative;
  width: 100vw;

  background: ${theme.colors.primary};
  color: ${theme.colors.white};

  @media ${theme.mq.tablet} {
    position: sticky;
    top: 0;
    width: 50vw;
  }
`

