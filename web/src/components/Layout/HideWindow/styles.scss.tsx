// HideWindow Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { AnimatedFlex, Flex } from '../../ui'
import { motion } from 'framer-motion'
import theme from '../../../../config/theme'

// ___________________________________________________________________

export const HideWindow = styled(motion.div)`
  /* background: ${theme.colors.black}; */
  border: 2px solid ${theme.colors.black};
  border-radius: 99px;
  /* box-shadow: ${theme.shadow}; */
  padding: ${theme.space[1]};
  /* mix-blend-mode: difference; */

  position: fixed;
  top: ${theme.space[1]};
  right: ${theme.space[1]};
  height: ${theme.space[5]};
  width: ${theme.space[5]};

  cursor: pointer;
  transition: background-color 0.222s ease-in-out 0s;
  z-index: 999999;

  display: none;

  @media ${theme.mq.tablet} {
    display: flex;
  }

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
