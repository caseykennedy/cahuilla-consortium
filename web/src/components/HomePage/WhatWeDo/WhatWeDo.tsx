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
import { Box, Flex, Text, Heading } from '../../ui'
import ListBox from '../../ui/ListBox'

// Components
import ImgMatch from '../../ImgMatch'
import Accordion from '../../Accordion'

import Hero from '../Hero'

// ___________________________________________________________________

const WhatWeDo = () => {
  return (
    <S.WhatWeDo id="what-we-do">
      <Hero src="group-hands.jpg" altText="Group raising hands in the air." />
      <Box p={4}>
        <Flex justifyContent="flex-end">
          <Box width={1 / 3}>1.</Box>
          <Box width={2 / 3}>
            <Heading as="h2" fontSize={2} mb={6}>
              What we do
            </Heading>
          </Box>
        </Flex>

        <Text as="p" className="t--lead">
          We work diligently to end all victimization against our tribal people
          through advocacy and education efforts that include prevention,
          intervention, and the fostering of resiliency.
        </Text>

        <Text as="p" pr={[0, 10]}>
          It is our objective to promote the safety and well-being of our Native
          communities.
        </Text>

        <Heading as="h3" fontSize={5} fontFamily="display" mt={8}>
          Live a life
          <br />
          without violence.
        </Heading>

        <Box mb={6}>
          <ImgMatch
            src="supporting-hands.jpg"
            altText="Friends comforting each others."
          />
        </Box>

        <Heading as="h2" fontSize={2} mb={6}>
          What we can help with
        </Heading>

        <ListBox>
          <li>Emergency short term &amp; basic needs</li>
          <li>Moving &amp; relocation</li>
          <li>Small home repair &amp; locksmith</li>
          <li>Transport / Public transportation assistance</li>
          <li>Burial/Funeral assistance (limited)</li>
        </ListBox>

        <Text as="p" pr={4} mt={4}>
          Please talk to an Advocate to see how we may be able to assit in your
          healing journey and restoration. Call us at{' '}
          <a href="tel:1-951-330-0479" aria-label="Call us">
            1 (951) 330-0479
          </a>
          .
        </Text>

        <Text as="p" className="t--small" pr={[0, 10]}>
          All services are dependent on available funds, however, we can work
          with you to find other resources.
        </Text>
      </Box>
    </S.WhatWeDo>
  )
}

export default WhatWeDo
