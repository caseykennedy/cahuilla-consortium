// Rethink Styles:

// _____________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'

// _____________________________________________________________

export const Hero = styled(Flex)`
  scroll-snap-align: start;
  flex-wrap: wrap;
  height: 75vh;
  width: 100%;
  overflow: hidden;

  img {
    /* mix-blend-mode: luminosity; */
  }

  @media ${theme.mq.tablet} {
  }
`
