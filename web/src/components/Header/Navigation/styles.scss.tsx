// Navigation Styles:

// _____________________________________________________________

import styled from 'styled-components'
import { Link } from 'gatsby'

import { Box, Flex, Text } from '../../ui'

import theme from '../../../gatsby-plugin-theme-ui'

// _____________________________________________________________

export const Nav = styled.nav`
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  z-index: 999;

  display: none;

  @media ${theme.mq.tablet} {
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
      font-size: ${theme.fontSizes[2]};
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &::before {
        background: ${theme.colors.text};
        content: '';
        display: initial;

        position: absolute;
        height: 2px;
        width: 100%;
        right: 0;
        bottom: 0;
        z-index: 0;

        transition: display 0.222s ease-in-out;
      }

      &.active,
      &:hover {
        color: ${theme.colors.text};

        &::before {
          display: none;
        }
      }
    }

    &__title {
      display: flex;
      position: relative;
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
  }
`
