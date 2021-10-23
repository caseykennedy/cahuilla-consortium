// Blog Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import theme from '../../../../config/theme'
import { Box, Flex } from 'theme-ui'

// ___________________________________________________________________

export const Blog = styled(Flex)`
  flex-wrap: wrap;
  padding: ${theme.space[8]} ${theme.space[4]} ${theme.space[4]};
  background: ${theme.colors.background};

  .post {
    border: 1px solid ${theme.colors.gray};
    padding: ${theme.space[4]};
    transition: background-color 0.777s ease-in-out 0s;

    &:hover {
      background: ${darken(0.05, theme.colors.background)};
    }

    .title {
    }

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5; /* number of lines to show */
      -webkit-box-orient: vertical;
    }

    a {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
