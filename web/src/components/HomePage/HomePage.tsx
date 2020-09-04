// HomePage:

// ___________________________________________________________________

import React from 'react'

// Theme + Styles
import theme from '../../../config/theme'
import * as S from './styles.scss'

// UI
import { Box, Flex, Heading, Text } from '../ui'
import Divider from '../ui/Divider'

// Components
import Accordion from '../Accordion'
import ImgMatch from '../ImgMatch'

// Sections
import Hero from './Hero'
import WhatWeDo from './WhatWeDo'
import WhoWeAre from './WhoWeAre'
import Faq from './Faq'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <WhatWeDo />
      <WhoWeAre />
      <Faq />
    </S.HomePage>
  )
}

export default HomePage
