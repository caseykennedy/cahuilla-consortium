// Layout Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { animated } from 'react-spring'

import { Box, Flex } from '../ui'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Wrapper = styled(Flex)`
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;

  width: 100vw;
  /* min-height: 100vh; */
  position: relative;
  background: ${theme.colors.background};

  @media ${theme.mq.tablet} {
    flex-direction: row;
  }
`

export const Main = styled.main`
  /* max-height: 100%; */
  position: relative;
  width: 100vw;

  @media ${theme.mq.tablet} {
  }
`

export const Aside = styled(Flex)`
  /* background: ${theme.colors.primary}; */
  position: fixed;
  width: 100vw;
  height: 100vh;
  max-height: 100%;

  z-index: 9999;

  @media ${theme.mq.tablet} {
    width: 50vw;
    position: sticky;
    top: 0;
  }
`

// ___________________________________________________________________
