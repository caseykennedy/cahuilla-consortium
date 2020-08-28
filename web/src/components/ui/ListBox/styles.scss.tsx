// ListBox Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Link } from 'gatsby'
import { darken } from 'polished'

import { Box, Flex, Heading } from '..'
import theme from '../../../../config/theme'

// ___________________________________________________________________

export const ListBox = styled(Box)`
  border-top: 1px solid ${theme.colors.gray};
  border-left: 1px solid ${theme.colors.gray};

  list-style: none;

  margin: 0;
  padding: 0;

  li {
    border-right: 1px solid ${theme.colors.gray};
    border-bottom: 1px solid ${theme.colors.gray};
    padding: ${theme.space[2]};

    transition: ${theme.transition.all};
    -webkit-tap-highlight-color: ${darken(0.05, theme.colors.quaternary)};

    &:hover {
      background: ${darken(0.05, theme.colors.quaternary)};
    }
  }
`
