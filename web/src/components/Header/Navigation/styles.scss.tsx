// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Link } from 'gatsby'

import { Box, Flex, Text } from '../../ui'

import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Nav = styled.nav`
  align-items: flex-end;
  justify-content: flex-end;
  padding: ${theme.space[4]} ${theme.space[4]} calc(${theme.space[3]} * 1.75) ${theme.space[4]}; 
  width: 100%;
  z-index: 999;

  display: none;

  @media (min-width: 1100px) {
    display: flex;
  }

  .nav-link {
    margin-left: ${theme.space[3]};
    position: relative;
    cursor: pointer;

    transition: ${theme.transition.all};

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      .sub-nav {
        display: initial;
        opacity: 1;
        transition: ${theme.transition.all};
      }
    }

    a {
      font-family: ${theme.fonts.display};
      font-size: ${theme.fontSizes[1]};
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &::before {
        position: absolute;
        content: '';
        background: ${theme.colors.white};
        width: 100%;
        height: 2px;
        bottom: 0;
        right: 0;
        z-index: 0;

        transition: width 0.222s ease-in-out;
      }

      &.active,
      &:hover {
        /* color: ${theme.colors.tertiary}; */

        &::before {
          width: 0;
          left: 0;
        }
      }
    }

    &__title {
      display: flex;
      position: relative;
      color: ${theme.colors.white};
      transition: ${theme.transition.all};

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          transform: rotate(90deg);
          width: 8px;
          margin-left: ${theme.space[2]};
        }
      }
    }

    .sub-nav {
      position: absolute;
      /* top: ${theme.space[6]}; */
      width: auto;
      min-width: 200px;

      background: ${theme.colors.background};
      border: ${theme.border};

      display: none;
      opacity: 0;
      transition: ${theme.transition.all};

      a {
        color: ${theme.colors.text};
        font-size: calc(${theme.fontSizes[1]} / 1.1);
        text-transform: uppercase;
        letter-spacing: 0;

        display: block;
        margin: 0;
        padding: calc(${theme.space[2]} * 1.2) ${theme.space[3]};
        white-space: nowrap;

        &.active,
        &:hover {
          background: ${theme.colors.primary};
          /* color: ${theme.colors.white}; */
        }
      }
    }
  }
`

export const SignIn = styled(Link)`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes[1]};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  display: flex;
  align-items: center;
  box-sizing: content-box;

  height: ${theme.headerHeight};
  padding: 0 ${theme.space[4]};
  border-left: ${theme.border};

  @media ${theme.mq.tablet} {
    padding: ${theme.space[2]} ${theme.space[4]};
  }

  &:hover {
    color: ${theme.colors.white};
    background: ${theme.colors.bloodshot};
  }
`
