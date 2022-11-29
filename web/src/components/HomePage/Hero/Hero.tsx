// Hero Section:

import React from 'react'
import * as S from './styles.scss'

// _____________________________________________________________

type Props = {
  children: React.ReactNode
}

const Hero: React.FC<Props> = ({ children }) => {
  return <S.Hero>{children}</S.Hero>
}

export default Hero
