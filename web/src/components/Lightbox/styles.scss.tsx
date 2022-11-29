// Lightbox Styles:

// _____________________________________________________________

import styled from 'styled-components'
import Lightbox from 'react-spring-lightbox'
import theme from '../../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../../../elements'

// _____________________________________________________________

export const Gallery = styled(Lightbox)`

  @media ${theme.mq.tablet} {
    /* height: calc(30vh - ${theme.headerHeight}); */
  }
`
