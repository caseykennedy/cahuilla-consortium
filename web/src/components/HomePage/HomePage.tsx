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

// Sections
import Hero from './Hero'

// ___________________________________________________________________

const HomePage: React.FC = () => {
  return (
    <S.HomePage>
      <Hero />

      <Box p={4} mt={4}>
        <Heading as="h4">What we do</Heading>
        <Text as="p">
          The Cahuilla Consortium's goal is to recognize that domestic violence
          and abuse, including physical, mental, verbal, and emotional abuse, as
          well as stalking and dating violence, are serious offenses against our
          Native women, children and families.
        </Text>
        <Text as="p">
          Our objective is to promote the safety and well­ being of our Native
          women.
        </Text>
      </Box>

      <Divider py={12} />
    </S.HomePage>
  )
}

export default HomePage
