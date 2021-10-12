// Blog Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const Blog = styled(Flex)`
  flex-wrap: wrap;
  padding: ${theme.space[8]} ${theme.space[4]} ${theme.space[4]};
  background: ${theme.colors.background};

  .post {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${theme.colors.gray};
    padding: ${theme.space[4]};
    transition: background-color 0.777s ease-in-out 0s;

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      background: ${darken(0.05, theme.colors.background)};
    }

    .title {
    }

    a {
      text-decoration: none;

      &:hover {
        color: inherit;
      }
    }
  }

  .load-more {
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }

    svg {
      fill: ${theme.colors.text};
    }
  }
`
