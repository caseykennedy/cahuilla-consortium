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

// Components
import ImgMatch from '../../ImgMatch'
import Accordion from '../../Accordion'
import AccordionChild from '../../Accordion/Accordion'

// ___________________________________________________________________

const WhatWeDo = () => {
  return (
    <S.WhatWeDo>
      <Box p={4} mt={4}>
        <Heading as="h2" fontSize={2} mb={4}>
          What we do
        </Heading>

        <Text as="p" fontSize={3}>
          We work diligently to end all victimization against our tribal people
          through advocacy and education efforts that include prevention,
          intervention, and the fostering of resiliency.
        </Text>

        {/* <hr /> */}

        <Accordion title="What is our objective?" active={true} {...AccordionProps}>
          <Flex className="content">
            <Box width={[1 / 4]}>
              <Text as="p">
                <strong>Objective</strong>
              </Text>
            </Box>
            <Box width={[3 / 4]} pl={[0, 4]}>
              <Text as="p" fontSize={2}>
                To promote the safety and well-being of our Native communities.
              </Text>
            </Box>
          </Flex>
        </Accordion>

        <Accordion title="What do we believe?" {...AccordionProps}>
          <Flex className="content">
            <Box width={[1 / 4]}>
              <Text as="p">
                <strong>Our belief</strong>
              </Text>
            </Box>
            <Box width={[3 / 4]} pl={[0, 4]}>
              <Text as="p" pb={4}>
                People are at their best when contributing to society, and
                making the choice to strengthen our community is a true
                expression of our values.
              </Text>
            </Box>
          </Flex>
        </Accordion>

        <Accordion title="What is our end goal?" {...AccordionProps}>
          <Flex className="content">
            <Box width={[1 / 4]}>
              <Text as="p">
                <strong>End Goal</strong>
              </Text>
            </Box>
            <Box width={[3 / 4]} pl={[0, 4]}>
              <Text as="p" pb={4}>
                To promote the safety and well-being of our Native communities.
                To promote the safety and well-being of our Native communities.
                To promote the safety and well-being of our Native communities.
              </Text>
            </Box>
          </Flex>
        </Accordion>

        <ImgMatch
          src="supporting-hands.jpg"
          altText="Friends comforting each others."
        />

        <Heading as="h3" fontSize={5} fontFamily="display" mt={8} mb={4}>
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

// ___________________________________________________________________

const AccordionProps = {}
