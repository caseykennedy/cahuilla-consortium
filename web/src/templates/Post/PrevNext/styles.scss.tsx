// Staff Styles:

// _____________________________________________________________

import { Link } from 'gatsby'
import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../../components/ui'

import theme from '../../../gatsby-plugin-theme-ui'

// _____________________________________________________________

export const PrevNext = styled(Flex)`
  flex-wrap: wrap;
  border-top: ${theme.border};
  border-bottom: ${theme.border};
`

export const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: ${theme.space[5]};
  width: 100%;

  color: ${theme.colors.text};
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes[2]};
  font-weight: 500;
  line-height: 1.15;
  text-transform: uppercase;
  text-decoration: none;

  @media ${theme.mq.tablet} {
    padding: ${theme.space[4]};
    /* width: 50%; */
    font-size: ${theme.fontSizes[3]};
  }

  &:hover {
    background: ${darken(0.05, theme.colors.background)};
    color: ${theme.colors.text};
  }

  &:nth-child(2) {
    border-left: none;
    border-top: ${theme.border};

    @media ${theme.mq.tablet} {
      border-left: ${theme.border};
      border-top: none;
    }
  }

  .button {
    &__title {
      /* display: flex; */
      align-items: center;
      justify-content: space-between;
      font-size: ${theme.fontSizes[2]};

      svg {
        fill: ${theme.colors.text};
        width: ${theme.space[5]};
        transform: rotate(-180deg);
      }

      &--next {
        margin-bottom: 0;

        svg {
          transform: rotate(0deg);
        }
      }
    }
  }
`
