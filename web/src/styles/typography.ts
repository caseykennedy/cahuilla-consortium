// Typography

// _____________________________________________________________

import { css } from 'styled-components'
import theme from '../gatsby-plugin-theme-ui'
import { lighten } from 'polished'

// Staatliches Regular
import StaatlichesEot from './fonts/Staatliches-Regular.eot'
import StaatlichesWoff2 from './fonts/Staatliches-Regular.woff2'
import StaatlichesWoff from './fonts/Staatliches-Regular.woff'
import StaatlichesOtf from './fonts/Staatliches-Regular.otf'

// San Francisco Regular
import SanFranciscoTextRegularEot from './fonts/SanFranciscoText-Regular.eot'
import SanFranciscoTextRegularWoff2 from './fonts/SanFranciscoText-Regular.woff2'
import SanFranciscoTextRegularWoff from './fonts/SanFranciscoText-Regular.woff'
import SanFranciscoTextRegularOtf from './fonts/SanFranciscoText-Regular.otf'

// San Francisco Medium
import SanFranciscoTextMediumEot from './fonts/SanFranciscoText-Medium.eot'
import SanFranciscoTextMediumWoff2 from './fonts/SanFranciscoText-Medium.woff2'
import SanFranciscoTextMediumWoff from './fonts/SanFranciscoText-Medium.woff'
import SanFranciscoTextMediumOtf from './fonts/SanFranciscoText-Medium.otf'

// San Francisco Bold
import SanFranciscoTextBoldEot from './fonts/SanFranciscoText-Bold.eot'
import SanFranciscoTextBoldWoff2 from './fonts/SanFranciscoText-Bold.woff2'
import SanFranciscoTextBoldWoff from './fonts/SanFranciscoText-Bold.woff'
import SanFranciscoTextBoldOtf from './fonts/SanFranciscoText-Bold.otf'

// BergenMono Regular
import BergenMonoRegularEot from './fonts/BergenMono-Regular.eot'
import BergenMonoRegularWoff2 from './fonts/BergenMono-Regular.woff2'
import BergenMonoRegularWoff from './fonts/BergenMono-Regular.woff'
import BergenMonoRegularOtf from './fonts/BergenMono-Regular.otf'

// _____________________________________________________________

const Typography = css`
  /* Staatliches */
  @font-face {
    font-family: 'Staatliches';
    src: url(${StaatlichesEot});
    src: url(${StaatlichesWoff2}) format('woff2'),
      url(${StaatlichesWoff}) format('woff'),
      url(${StaatlichesOtf}) format('opentype'),
      url(${StaatlichesEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* San Francisco Regular */
  @font-face {
    font-family: 'San Francisco';
    src: url(${SanFranciscoTextRegularEot});
    src: url(${SanFranciscoTextRegularWoff2}) format('woff2'),
      url(${SanFranciscoTextRegularWoff}) format('woff'),
      url(${SanFranciscoTextRegularOtf}) format('opentype'),
      url(${SanFranciscoTextRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* San Francisco Medium */
  @font-face {
    font-family: 'San Francisco';
    src: url(${SanFranciscoTextMediumEot});
    src: url(${SanFranciscoTextMediumWoff2}) format('woff2'),
      url(${SanFranciscoTextMediumWoff}) format('woff'),
      url(${SanFranciscoTextMediumOtf}) format('opentype'),
      url(${SanFranciscoTextMediumEot}?#iefix) format('embedded-opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  /* San Francisco Bold */
  @font-face {
    font-family: 'San Francisco';
    src: url(${SanFranciscoTextBoldEot});
    src: url(${SanFranciscoTextBoldWoff2}) format('woff2'),
      url(${SanFranciscoTextBoldWoff}) format('woff'),
      url(${SanFranciscoTextBoldOtf}) format('opentype'),
      url(${SanFranciscoTextBoldEot}?#iefix) format('embedded-opentype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  /* BergenMono Regular */
  @font-face {
    font-family: 'Bergen Mono';
    src: url(${BergenMonoRegularEot});
    src: url(${BergenMonoRegularWoff2}) format('woff2'),
      url(${BergenMonoRegularWoff}) format('woff'),
      url(${BergenMonoRegularOtf}) format('opentype'),
      url(${BergenMonoRegularEot}?#iefix) format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }

  html {
    font-size: 18px;
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }

  body {
    color: ${theme.colors.text};

    font-size: ${theme.root.font.baseSize};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.root.font.bodyLineHeight};
    letter-spacing: ${theme.root.font.baseLetterSpacing};

    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: 'pnum';

    text-rendering: geometricPrecision;
    font-feature-settings: 'pnum';
    font-variant-numeric: proportional-nums;
    font-variant-ligatures: discretionary-ligatures;
  }

  mark {
    background-color: ${theme.colors.quinary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.regular};
    line-height: ${theme.root.font.headingLineHeight};
    letter-spacing: ${theme.root.font.headingLetterSpacing};
    margin: 0 0 ${theme.space[2]};
    transition: ${theme.transition.all};

    text-transform: capitalize;

    strong {
      font-weight: ${theme.fontWeights.regular};
    }
  }

  .text--xxxl {
    font-size: calc(${theme.fontSizes[4]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[6]} / 1);
    }

    @media ${theme.mq.desktop} {
      font-size: calc(${theme.fontSizes[7]} / 1);
    }
  }

  h1,
  .text--xxl {
    font-size: calc(${theme.fontSizes[3]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[6]} / 1.25);
      line-height: calc(${theme.root.font.headingLineHeight} / 1.15);
    }

    @media ${theme.mq.desktop} {
      font-size: ${theme.fontSizes[6]};
    }
  }

  h2,
  .text--xl {
    font-size: calc(${theme.fontSizes[6]} / 1.25);
    line-height: calc(${theme.root.font.headingLineHeight} / 1.15);

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[6]} / 1);
    }
  }

  h3,
  .text--lg {
    font-size: calc(${theme.fontSizes[4]});

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[5]});
    }
  }

  h4,
  .text--md {
    font-size: calc(${theme.fontSizes[3]} / 1.25);
    margin: 0 0 ${theme.space[4]};

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[3]});
    }
  }

  h5,
  .text--sm {
    font-size: ${theme.fontSizes[2]};
  }

  .text--xs {
    font-size: ${theme.fontSizes[1]};
    line-height: 1.15;
  }

  .text--xs {
    font-size: ${theme.root.font.xs};
  }

  p {
    font-size: ${theme.fontSizes[2]};
    font-weight: 400;
    line-height: ${theme.root.font.bodyLineHeight};
    margin: 0 0 ${theme.space[2]};

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[2]} * 1.25);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    font-weight: 500;
  }

  small {
    line-height: calc(${theme.root.font.bodyLineHeight} / 1.15);
  }

  mark {
    background-color: ${theme.colors.white};
    padding: 0 ${theme.space[1]};
  }

  .t--lead {
    font-size: calc(${theme.fontSizes[2]} * 1.25);
    line-height: calc(${theme.root.font.bodyLineHeight} * 0.925);
    margin-bottom: ${theme.space[3]};

    @media ${theme.mq.tablet} {
      font-size: calc(${theme.fontSizes[3]});
    }
  }

  .t--small {
    font-size: calc(${theme.fontSizes[1]} / 1.25);
  }

  .t--underline {
    text-decoration: underline;
  }

  .t--dual-col {
    column-count: 1;

    @media ${theme.mq.tablet} {
      column-count: 2;
    }
  }

  .t--uppercase {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  a {
    font-weight: 500;
    text-decoration: underline;
    position: relative;
    z-index: 1;

    transition: ${theme.transition.all};

    color: inherit;
    line-break: loose;
    word-break: break-all;

    &:hover,
    &:focus {
      text-decoration: none;
      color: ${lighten(0.1, theme.colors.text)};
    }
  }

  .t--link {
    position: relative;

    &::before {
      content: '';
      background: ${theme.colors.secondary};
      width: 0;
      height: 6px;

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;

      transition: width 0.222s ease-in-out;
    }

    /* &:hover {
      &::before {
        width: 100%;
      }
    } */

    &:active {
      &::after {
        mix-blend-mode: difference;
      }
    }

    &:hover {
      span {
        margin-left: calc(${theme.space[4]} * 1.5);
      }
    }

    span {
      margin-left: ${theme.space[4]};
      transition: ${theme.transition.all};

      svg {
        width: 24px;
      }
    }

    h4 {
      display: flex;
    }
  }

  ul {
    list-style-type: none;

    li {
      list-style-position: outside;
      line-height: calc(${theme.root.font.bodyLineHeight} * 1.15);
      font-size: ${theme.fontSizes[2]};
    }
  }
`

export default Typography

// _____________________________________________________________
