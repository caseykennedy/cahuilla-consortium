// HomePage:

// ___________________________________________________________________

import React from 'react'

import Hero from './Sections/Hero'

import Divider from '../../elements/Divider'

import { Box, Flex, AnimatedBox, Heading } from '../../elements'
import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const billboardProps = {
  bg: 'primary',
  message: "Let's schedule<br />a one-to-one",
  title: 'Ready to chat?',
  src: 'operating-room.jpg',
  altText: 'Doctors in the operating room.'
}

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Hero />
      <Divider py={12} />
      <Divider py={12} />
      <Divider py={12} />
    </S.HomePage>
  )
}

export default HomePage
