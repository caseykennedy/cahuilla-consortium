// Footer styles:

// _____________________________________________________________

import styled from 'styled-components'
import { Box, Flex, Heading } from '../ui'
import theme from '../../gatsby-plugin-theme-ui'

import pattern from './assets/hummingbird-pattern.png'

// _____________________________________________________________

export const Footer = styled.footer`
  @media ${theme.mq.tablet} {
  }

  .inner {
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    flex-wrap: wrap;

    background: linear-gradient(
      180deg,
      ${theme.colors.quinary} 21.88%,
      ${theme.colors.secondary} 84.39%
    );
    box-shadow: inset ${theme.shadow}, ${theme.shadow};
    /* border-bottom: ${theme.border}; */
    color: ${theme.colors.white};

    padding: ${theme.space[4]} ${theme.space[4]};
    position: relative;
    height: 75vh;
    width: 100%;
    z-index: 2;
  }

  .panel {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    z-index: 1;

    a {
      color: ${theme.colors.white};
    }
  }

  .bg {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    mix-blend-mode: luminosity;
    opacity: 0.75;
  }
`

export const HideAway = styled(Box)`
  position: sticky;
  bottom: 0;
  z-index: 0;

  .wallpaper {
    background: url(${pattern}) repeat-x center center;
    background-size: calc(${theme.space[7]} * 5);

    opacity: 0.5;
    height: calc(${theme.space[5]} * 5);
    width: 100%;
  }

  .footnote {
    border-top: ${theme.border};
    padding: ${theme.space[4]};

    svg {
      fill: ${theme.colors.black};
    }

    p {
      border-left: ${theme.border};
      margin-left: ${theme.space[4]};
      padding-left: ${theme.space[4]};

      font-size: calc(${theme.fontSizes[1]} / 1.25);
    }
  }
`

export const Logo = styled(Flex)`
  align-items: center;

  @media ${theme.mq.tablet} {
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};

    svg {
      fill: ${theme.colors.white};
    }

    .symbol {
      svg {
        width: 45px;
      }
    }

    .wordmark {
      margin-left: ${theme.space[2]};
      display: none;

      @media ${theme.mq.tablet} {
        display: initial;
      }

      svg {
        width: 90px;
      }
    }
  }
`
