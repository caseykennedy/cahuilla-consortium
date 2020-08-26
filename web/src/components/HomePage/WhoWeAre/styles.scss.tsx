// Who We Are Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const WhoWeAre = styled.div`
  scroll-snap-align: start;
  padding: ${theme.space[4]};

  @media ${theme.mq.tablet} {
  }
`
