// Rethink Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const Hero = styled(Flex)`
  scroll-snap-align: start;
  flex-wrap: wrap;
  height: 75vh;
  width: 100%;
  

  img {
    mix-blend-mode: luminosity;
  }

  @media ${theme.mq.tablet} {
  }
`
