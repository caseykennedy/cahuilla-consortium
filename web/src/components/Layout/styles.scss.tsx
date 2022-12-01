// Layout Styles:

// _____________________________________________________________

import styled from 'styled-components'

import { Flex } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

// _____________________________________________________________

export const Wrapper = styled(Flex)`
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;

  width: 100%;
  position: relative;

  @media ${theme.mq.tablet} {
    flex-direction: row;
  }
`

export const Main = styled.main`
  background: ${theme.colors.background};
  position: relative;
  width: 100%;
`
