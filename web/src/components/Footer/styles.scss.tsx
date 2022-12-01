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


    background-color: ${theme.colors.primary};
    background: linear-gradient(
      180deg,
      ${theme.colors.secondary} 21.88%,
      ${theme.colors.primary} 84.39%
    );
    box-shadow: ${theme.shadow};
    /* border-bottom: ${theme.border}; */
    color: ${theme.colors.white};

    padding: ${theme.space[4]} ${theme.space[4]};
    position: relative;
    min-height: 60vh;
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
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    mix-blend-mode: color-burn;
    opacity: 0.35;

    .gatsby-image-wrapper {
      min-height: -webkit-fill-available;
    }
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
    display: flex;
    flex-flow: column nowrap;
    border-top: ${theme.border};
    padding: ${theme.space[4]};

    @media ${theme.mq.tablet} {
      align-items: center;
      flex-flow: row nowrap;
    }

    svg {
      fill: ${theme.colors.black};
    }

    p {
      margin-top: ${theme.space[4]};

      @media ${theme.mq.tablet} {
        margin-top: 0;
        margin-left: ${theme.space[4]};
      }
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
      display: inline-flex;
      svg {
        width: 45px;
      }
    }

    .wordmark {
      margin-left: ${theme.space[2]};

      @media ${theme.mq.tablet} {
        display: initial;
      }

      svg {
        width: 90px;
      }
    }
  }
`
