// Faq Styles:

// _____________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'

// _____________________________________________________________

export const Faq = styled(Flex)`
  flex-wrap: wrap;

  @media ${theme.mq.tablet} {
  }
`
