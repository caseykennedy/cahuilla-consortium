// What We Do Section:

// ___________________________________________________________________

import React from 'react'

// Libraries
import Img from 'gatsby-image/withIEPolyfill'
import { useSpring, config } from 'react-spring'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// UI
import { Box, Text, Heading } from '../../ui'

// Components
import ImgMatch from '../../ImgMatch'

// ___________________________________________________________________

const WhatWeDo = () => {
  return (
    <S.WhatWeDo>
      <Box p={4} mt={4}>
        <Heading as="h2" fontSize={3} mb={4}>
          What we do
        </Heading>

        <Text as="p" fontSize={3}>
          We work diligently to end all victimization against our tribal people
          through advocacy and education efforts that include prevention,
          intervention, and the fostering of resiliency.
        </Text>

        <Box py={[6, 8]} pl={[0, 10]}>
          <Text as="p">
            <strong>Our objective</strong>
          </Text>
          <Text as="p">
            To promote the safety and well-being of our Native communities.
          </Text>
          <Text as="p">
            <strong>Our belief</strong>
          </Text>
          <Text as="p">
            People are at their best when contributing to society, and making
            the choice to strengthen our community is a true expression of our
            values.
          </Text>
          <Text as="p">
            <strong>End goal</strong>
          </Text>
          <Text as="p">
            To promote the safety and well-being of our Native communities. To
            promote the safety and well-being of our Native communities. To
            promote the safety and well-being of our Native communities.
          </Text>
        </Box>

        <ImgMatch
          src="supporting-hands.jpg"
          altText="Friends comforting each others."
        />

        <Heading as="h3" fontSize={5} mt={8} mb={4}>
          Live a life
          <br />
          without violence.
        </Heading>

        <Text as="p">
          <strong>What we can help with:</strong>
        </Text>

        <Box as="ul">
          <li>Emergency short term &amp; basic needs</li>
          <li>In-person support through Advocacy</li>
          <li>Moving &amp; relocation</li>
          <li>Small home repair &amp; locksmith</li>
          <li>Transport / Public transportation assistance</li>
        </Box>
      </Box>
    </S.WhatWeDo>
  )
}

export default WhatWeDo
