// HideWindow Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { AnimatedFlex, Flex } from '../../ui'
import { motion } from 'framer-motion'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const overlayWidth = '100vw'

export const Overlay = styled(Flex)`
  justify-content: flex-start;
  flex-direction: column;

  width: ${overlayWidth};
  height: 100%;
  overflow: auto;

  position: fixed;
  right: 0;
  bottom: 0;

  background: ${theme.colors.background};
  color: ${theme.colors.gray};
  visibility: hidden;
  opacity: 0;
  transition: all 0.222s ease-in-out;
  z-index: 9999;

  @media ${theme.mq.tablet} {
  }

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

export const HideWindow = styled(motion.div)`
  /* background: ${theme.colors.black}; */
  border: 2px solid ${theme.colors.black};
  border-radius: 99px;
  /* box-shadow: ${theme.shadow}; */
  padding: ${theme.space[1]};
  /* mix-blend-mode: difference; */

  position: fixed;
  bottom: ${theme.space[1]};
  right: ${theme.space[1]};
  height: ${theme.space[6]};
  width: ${theme.space[6]};

  cursor: pointer;
  transition: background-color 0.222s ease-in-out 0s;
  z-index: 999999;

  /* display: none; */
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${theme.colors.black};
    transition: fill 0.222s ease-in-out 0s;
    width: 32px;
  }

  &:hover {
    background: ${theme.colors.black};

    svg {
      fill: ${theme.colors.background};
    }
  }

  &.active {
    border-color: transparent;

    svg {
      fill: ${theme.colors.gray};
    }

    &:hover {
      background: transparent;

      svg {
        fill: ${theme.colors.secondary};
      }
    }
  }

  .text {
    /* margin-right: ${theme.space[3]}; */
    transform: rotate(-90deg);
  }
`
