// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex, Heading } from '../ui'
import theme from '../../../config/theme'

import pattern from './assets/hummingbird-pattern.png'

// ___________________________________________________________________

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
      ${theme.colors.tertiary} 21.88%,
      ${theme.colors.primary} 84.39%
    );
    box-shadow: ${theme.shadow};
    color: ${theme.colors.white};

    padding: ${theme.space[4]} ${theme.space[4]};
    position: relative;
    height: 90vh;
    width: 100vw;

    color: ${theme.colors.white};
  }

  .panel {
    position: relative;
    width: 100%;
    z-index: 1;

    a {
      color: ${theme.colors.white};
    }
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    mix-blend-mode: luminosity;
    opacity: 0.75;
  }
`

export const HideAway = styled(Box)`
  .wallpaper {
    background: url(${pattern}) repeat-x center center;
    background-size: calc(${theme.space[7]} * 11);

    opacity: 0.5;
    height: calc(${theme.space[7]} * 7);
    width: 100%;
  }

  .footnote {
    padding: ${theme.space[4]};

    svg {
      fill: ${theme.colors.black};
    }

    p {
      border-left: ${theme.border};
      margin-left: ${theme.space[4]};
      padding-left: ${theme.space[4]};
    }
  }
`
