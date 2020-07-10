// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../../config/theme'
import * as S from './styles.scss'

// UI
import { Box, Flex, AnimatedBox, Heading } from '../ui'
import Divider from '../ui/Divider'

// Components
import Accordion from '../Accordion'

// Sections
import Hero from './Sections/Hero'

// ___________________________________________________________________

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
