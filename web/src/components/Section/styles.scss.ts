// Section Styles:

// _____________________________________________________________

import styled from 'styled-components'
import theme from '../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../ui'

// _____________________________________________________________

type Props = {
  border?: boolean
  maxWidth?: number | number[] | string | string[]
  overflow?: string
}

export const Section = styled(Box)<Props>`
  border-top: ${p => (!p.border ? 'none' : `${theme.border}`)};
  position: relative;
  overflow: ${p => (!p.overflow ? 'visible' : p.overflow)};

  .section__inner {
    margin: 0 auto;
    max-width: ${p => (!p.maxWidth ? theme.maxWidth : p.maxWidth)};
    width: 100%;
  }
`
