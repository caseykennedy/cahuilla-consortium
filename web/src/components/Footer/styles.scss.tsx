// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex, Heading } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Footer = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;

  background: ${theme.colors.tertiary};
  padding: ${theme.space[5]} ${theme.space[5]};
  width: 100vw;

  @media ${theme.mq.tablet} {
  }
`
