// Billboard Styles:

// _____________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../ui'

// _____________________________________________________________

export const Billboard = styled(Flex)`
  overflow: hidden;
  padding-top: ${theme.headerHeight};
  position: relative;
  height: auto;
  width: 100%;
  z-index: 99;

  color: ${theme.colors.white};

  @media ${theme.mq.tablet} {
    position: sticky;
    top: 0;
    height: 100vh;
    /* height: calc(100vh - ${theme.headerHeight}); */
  }

  .inner {
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    .contact {
      background: hsla(0, 0%, 0%, 0.1);
      border-top: ${theme.border};
      flex-wrap: wrap;
      opacity: 0;
      transform: ${theme.transform.matrix.from};
      width: 100%;

      &.show {
        transition: ${theme.transition.all};
        opacity: 1;
        transform: ${theme.transform.matrix.to};
      }
    }
  }

  .scroll-arrow {
    margin-top: auto;
    margin-left: auto;

    span {
      transform: rotate(90deg);
      width: 32px;

      svg {
      }
    }
  }
`

export const Telephone = styled(Box)``
