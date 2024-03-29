// Resources Styles:

// _____________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from 'theme-ui'
import { darken } from 'polished'

// _____________________________________________________________

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
    border-top: ${buttonBorder};
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

    height: 25vh;
    width: 100%;
    padding: ${theme.space[4]};
    transition: ${theme.transition.all};

    &:last-child {
      border-top: none;
      border-bottom: none;
    }

    &:hover {
      background: ${darken(0.05, theme.colors.tertiary)};
      color: ${theme.colors.white};
    }

    @media ${theme.mq.tablet} {
      border-top: none;
      border-left: ${buttonBorder};
      height: calc(50vh);

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
          width: ${theme.space[5]};
        }
      }
    }
  }
`
