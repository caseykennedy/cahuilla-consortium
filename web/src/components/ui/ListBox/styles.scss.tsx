// ListBox Styles:

// _____________________________________________________________

import styled from 'styled-components'
import { Link } from 'gatsby'
import { darken } from 'polished'

import { Box, Flex, Heading } from '..'
import theme from '../../../gatsby-plugin-theme-ui'

// _____________________________________________________________

export const ListBox = styled(Box)`
  border-top: ${theme.border};
  border-left: ${theme.border};

  list-style: none;

  margin: 0;
  padding: 0;

  li {
    border-right: ${theme.border};
    border-bottom: ${theme.border};
    padding: ${theme.space[2]};

    transition: ${theme.transition.all};
    -webkit-tap-highlight-color: ${darken(0.05, theme.colors.quaternary)};

    &:hover {
      background: ${darken(0.05, theme.colors.quaternary)};
    }
  }
`
