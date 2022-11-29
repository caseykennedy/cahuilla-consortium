// Overlay:
// Navigation Overlay

// _____________________________________________________________

import React from 'react'
import ReactDOM from 'react-dom'

import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// _____________________________________________________________

type Props = {
  className: string
  children?: React.ReactNode
}

// _____________________________________________________________

const Overlay: React.FC<Props> = ({ children, className }) => {
  return <S.Overlay className={className}>{children}</S.Overlay>
}

export default Overlay

// _____________________________________________________________
