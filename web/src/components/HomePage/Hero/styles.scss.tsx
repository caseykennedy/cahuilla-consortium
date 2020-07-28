// Rethink Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const Hero = styled(Flex)`
  flex-wrap: wrap;
  height: 80vh;
  width: 100%;

  img {
    mix-blend-mode: luminosity;
  }

  @media ${theme.mq.tablet} {
  }
`
