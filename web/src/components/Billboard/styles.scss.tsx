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
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;

  padding-top: calc(${theme.headerHeight} + ${theme.space[7]});
  position: relative;
  width: 100vw;

  /* background: ${theme.colors.primary}; */
  color: ${theme.colors.white};
  transition: ${theme.transition.all};

  @media ${theme.mq.tablet} {
    position: sticky;
    top: 0;
    width: 50vw;
  }
`

export const Telephone = styled(Box)`
  padding: ${theme.space[4]};

  .title {
    text-transform: uppercase;
  }

  .tel {
    font-weight: 500;
    font-size: ${theme.fontSizes[3]};
  }

  @media ${theme.mq.tablet} {
  }
`

export const Footnote = styled(Box)`
  padding: ${theme.space[4]};

  .title {
    text-transform: uppercase;
  }

  .tel {
    font-weight: 500;
    font-size: ${theme.fontSizes[3]};
  }

  @media ${theme.mq.tablet} {
  }
`