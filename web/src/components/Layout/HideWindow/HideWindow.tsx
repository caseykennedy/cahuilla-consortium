// HideWindow:

// _____________________________________________________________

import React from 'react'

// Theme
import * as S from './styles.scss'

// Components
import Hide from '../../Hide'

// _____________________________________________________________

const HideWindow = () => (
  <S.HideWindow
    href="https://www.positive.news/"
    target="_blank"
    aria-label="hide-page"
  >
    <Hide />
  </S.HideWindow>
)

export default HideWindow
