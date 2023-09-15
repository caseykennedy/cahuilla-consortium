// Blog Styles:

// _____________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from 'theme-ui'

// _____________________________________________________________

export const Blog = styled(Flex)`
  flex-wrap: wrap;
  padding: ${theme.space[4]};
  background: ${theme.colors.background};

  .post {
    border: ${theme.border};
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;

    background: ${theme.colors.background};
    border: ${theme.border};
    border-radius: ${theme.radius};

    cursor: pointer;
    color: ${darken(0.35, theme.colors.background)};
    font-family: ${theme.fonts.display};
    font-size: ${theme.fontSizes[3]};
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    transition: ${theme.transition.all};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    svg {
      fill: ${theme.colors.text};
    }
  }
`
