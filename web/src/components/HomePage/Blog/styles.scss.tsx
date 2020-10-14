// Blog Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const Blog = styled(Flex)`
  flex-wrap: wrap;
  padding: ${theme.space[8]} ${theme.space[4]};

  background: ${theme.colors.background};

  .post {
    border: 1px solid ${theme.colors.gray};
    padding: ${theme.space[4]};

    &:first-child {
      margin-left: 0;
    }
  }
`
