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
  overflow: hidden;
  padding-top: calc(${theme.headerHeight} + ${theme.space[6]});
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 99;

  color: ${theme.colors.white};

  @media ${theme.mq.tablet} {
    position: sticky;
    top: 0;
    width: 50vw;
  }

  .inner {
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;

    .contact {
      flex-direction: column;
      flex-wrap: wrap;
      opacity: 0;
      transform: ${theme.transform.matrix.from};

      &.show {
        transition: ${theme.transition.all};
        opacity: 1;
        transform: ${theme.transform.matrix.to};
      }
    }
  }
`

export const Telephone = styled(Box)`
  padding: 0 ${theme.space[4]} ${theme.space[4]} ${theme.space[4]};

  @media ${theme.mq.tablet} {
  }
`

export const Footnote = styled(Box)`
  font-size: ${theme.fontSizes[1]};
  padding: 0 ${theme.space[4]} ${theme.space[4]} ${theme.space[4]};

  @media ${theme.mq.tablet} {
  }
`
