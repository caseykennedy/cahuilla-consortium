// Navigation Styles:

// _____________________________________________________________

import styled from 'styled-components'

import { Box, Flex } from '../ui'

import theme from '../../gatsby-plugin-theme-ui'

// Begin Styles
// _____________________________________________________________

const overlayWidth = '100vw'

export const Overlay = styled(Flex)`
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  height: 100%;
  overflow: auto;

  position: fixed;
  right: 0;
  bottom: 0;

  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  visibility: hidden;
  opacity: 0;
  transition: all 0.222s ease-in-out;
  z-index: 9999;

  /* @media ${theme.mq.tablet} {
    width: calc(${overlayWidth} / 2);
    right: calc(-${overlayWidth} / 2);
    border-left: ${theme.border};

    visibility: visible;
    opacity: 1;
  } */

  &.nav-bg--open {
    visibility: visible;
    opacity: 1;
  }
`
