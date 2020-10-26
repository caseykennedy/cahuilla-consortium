// Overlay:
// Navigation Overlay

// ___________________________________________________________________

import React from 'react'
import ReactDOM from 'react-dom'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  className: string
  children: React.ReactNode
}

// ___________________________________________________________________

const Overlay: React.FC<Props> = ({ children, className }) => {
  return <S.Overlay className={className}>{children}</S.Overlay>
}

export default Overlay

// ___________________________________________________________________
