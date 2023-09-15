// HideWindow Styles:

// _____________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'

// _____________________________________________________________

const overlayWidth = '100vw'

export const Overlay = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
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

export const HideWindow = styled.a`
  /* background: ${theme.colors.black}; */
  border: 2px solid ${theme.colors.black};
  border-radius: 99px;
  /* box-shadow: ${theme.shadow}; */
  padding: ${theme.space[1]};
  /* mix-blend-mode: difference; */

  position: fixed;
  bottom: ${theme.space[2]};
  right: ${theme.space[2]};
  height: ${theme.space[5]};
  width: ${theme.space[5]};

  cursor: pointer;
  transition: background-color 0.222s ease-in-out 0s;
  z-index: 999999;

  display: none;
  align-items: center;
  justify-content: center;

  @media ${theme.mq.tablet} {
    top: ${theme.space[4]};
    bottom: initial;
    right: ${theme.space[4]};
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
