// ResourcesPage Styles:

// _____________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from 'theme-ui'

import theme from '../../gatsby-plugin-theme-ui'

// _____________________________________________________________

export const ResourcesPage = styled.div`
  padding: ${theme.space[4]};

  .post {
    border: 1px solid ${theme.colors.gray};
    transition: ${theme.transition.all};

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

    .inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-decoration: none;
      padding: ${theme.space[4]};
      width: 100%;

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

  .is-video {
    background: ${theme.colors.secondary};
    border-radius: 3px;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes[1]};
    font-weight: 600;
    padding: ${theme.space[1]} ${theme.space[2]};
  }
`
