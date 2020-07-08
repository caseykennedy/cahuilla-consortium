// HomePage:

// ___________________________________________________________________

import React from 'react'

import Hero from './Sections/Hero'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const billboardProps = {
  bg: 'primary',
  message: 'Let\'s schedule<br />a one-to-one',
  title: 'Ready to chat?',
  src: 'operating-room.jpg',
  altText: 'Doctors in the operating room.'
}

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Hero />
    </S.HomePage>
  )
}

export default HomePage
