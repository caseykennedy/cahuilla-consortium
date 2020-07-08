// Header Styles:

// ___________________________________________________________________

// Core
import { Link } from 'gatsby'
import styled from 'styled-components'
import { readableColor, darken } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex, AnimatedFlex } from '../../elements'

// ___________________________________________________________________

export const Header = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  width: 100vw;
  z-index: 99;

  background: ${theme.colors.primary};
  color: ${theme.colors.white};

  @media ${theme.mq.tablet} {
    width: 50vw;
    max-height: 100vh;
    position: sticky;
    top: 0;
  }
`

export const Logo = styled(Box)`
  padding: ${theme.space[5]} ${theme.space[5]};

  @media ${theme.mq.tablet} {
  }

  &.logo--dark {
    background: ${theme.colors.secondary};

    svg {
      fill: ${theme.colors.white};
    }
  }

  a {
    color: ${theme.colors.white};
  }

  svg {
    fill: ${theme.colors.secondary};
    width: 100%;
    max-width: calc(${theme.space[3]} * 6);
    min-width: calc(${theme.space[3]} * 4);
  }
`

export const Tools = styled(Flex)`
  justify-content: space-between;
  flex: 1;
`

export const Nav = styled(Flex)`
  flex: 1;
  display: none;
  justify-content: flex-end;

  @media ${theme.mq.desktop} {
    display: flex;
  }

  .cta {
    /* display: none; */

    @media ${theme.mq.desktop} {
      display: initial;
    }
  }
`

export const Toggle = styled.div`
  display: flex;
  align-items: flex-start;
  box-sizing: content-box;
  padding: ${theme.space[5]};

  color: ${theme.colors.text};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  cursor: pointer;

  @media ${theme.mq.desktop} {
    display: none;
  }

  span {
    svg {
      width: ${theme.space[5]};
    }
  }
`

export const Cta = styled(Box)`
  display: none;

  @media ${theme.mq.tablet} {
    display: flex;
  }
`
