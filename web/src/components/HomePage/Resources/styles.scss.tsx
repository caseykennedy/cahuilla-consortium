// Resources Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'
import { darken } from 'polished'

// ___________________________________________________________________

export const Resources = styled(Flex)`
  flex-wrap: wrap;

  @media ${theme.mq.tablet} {
  }
`

export const ButtonGroup = styled(Flex)`
  flex-wrap: wrap;

  @media ${theme.mq.tablet} {
  }

  button {
    background: ${theme.colors.tertiary};

    border-top: none;
    border-right: 2px solid ${theme.colors.background};
    border-bottom: 2px solid ${theme.colors.background};
    border-left: 2px solid ${theme.colors.background};

    border-radius: 0;
    cursor: pointer;
    height: calc(50vh);
    width: 100%;
    transition: ${theme.transition.all};

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background: ${darken(0.05, theme.colors.tertiary)};
    }
  }
`
