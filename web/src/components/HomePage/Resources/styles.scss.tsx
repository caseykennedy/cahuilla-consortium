// Resources Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'
import { darken } from 'polished'

// ___________________________________________________________________

const buttonBorder = `4px solid ${theme.colors.background}`

export const Resources = styled(Flex)`
  flex-wrap: wrap;

  @media ${theme.mq.tablet} {
  }
`

export const ButtonGroup = styled(Flex)`
  flex-wrap: wrap;

  a {
    background: ${theme.colors.tertiary};
    border-top: none;
    border-right: none;
    border-bottom: ${buttonBorder};
    border-left: none;
    border-radius: 0;
    color: ${theme.colors.white};
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    text-align: left;

    height: calc(50vh);
    width: 100%;
    padding: ${theme.space[6]};
    transition: ${theme.transition.all};

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background: ${darken(0.025, theme.colors.tertiary)};
    }

    @media ${theme.mq.tablet} {
      border-left: ${buttonBorder};
    }

    div {
      align-items: center;
      justify-content: space-between;
      width: 100%;

      p {
        margin-bottom: 0;
      }

      span {
        align-self: flex-end;

        svg {
          fill: ${theme.colors.white};
          width: 56px;
        }
      }
    }
  }
`
