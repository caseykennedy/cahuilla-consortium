// Root variables

// ___________________________________________________________________

// Core
import { css } from 'styled-components'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const RootVariables = css`
  :root {
    --root-size: 6rem;

    /* -------------------------------- 
    Typography
    -------------------------------- */

    /* --font-body: ${theme.fonts.body};
    --font-heading: ${theme.fonts.heading};
    --font-code: ${theme.fonts.code}; */

    /* set base values */
    --text-base-size: 0.9em;
    --text-scale-ratio: 1.618;
    --text-base-letter-spacing: 0px;

    /* type scale */
    --text-xs: calc(1.5em / (var(--text-scale-ratio) * var(--text-scale-ratio)));
    --text-sm: calc(1.5em / var(--text-scale-ratio));
    --text-md: calc(1em * var(--text-scale-ratio));
    --text-lg: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-xl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-xxl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));
    --text-xxxl: calc(1em * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio) * var(--text-scale-ratio));

    /* line-height */
    --heading-line-height: 0.9;
    --body-line-height: 1.25;
  }

  @media ${theme.mq.tablet} {
    :root {
      --root-size: 8rem;
      --text-base-size: 1em;
    }
  }
`

export default RootVariables

// ___________________________________________________________________
