// Homepage Styles:

// _____________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../ui'

import theme from '../../gatsby-plugin-theme-ui'

// _____________________________________________________________

export const HomePage = styled.div`
  width: 100%;
  scroll-snap-type: y mandatory;

  -webkit-overflow-scrolling: touch;

  @media ${theme.mq.tablet} {
  }
`
