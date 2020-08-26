// Who We Are Section:

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

const WhoWeAre = () => {
  return (
    <S.WhoWeAre>
      <Heading as="h2" fontSize={3} mb={4}>
        Who we are
      </Heading>

      <Text as="p" fontSize={3}>
        Each Tribe is represented on our Advisory Committee:
      </Text>

      <Box as="ul">
        <li>One delegate from each of the Consortium Tribes</li>
        <li>A representative from California Indian Legal Services</li>
        <li>A representative from our local Indian Health Clinic</li>
      </Box>

      <Text as="p">
        The Advisory Committee meets monthly to provide policy guidance and to
        serve as a conduit to the tribal communities.
      </Text>

      <Box mb={8}>
        <ImgMatch
          src="supporting-hands.jpg"
          altText="Friends comforting each others."
        />
      </Box>

      <Heading as="p" mb={4}>
        <strong>What is our purpose?</strong>
      </Heading>
      <Text as="p">
        It is our mission to promote the health, safety, and well-being of our
        community members who have been victimized by violence.
      </Text>

      <Text as="p">
        <strong>Values</strong>
      </Text>
      <Box as="ul">
        <li>Education</li>
        <li>Housing</li>
        <li>Respite</li>
        <li>Vocation</li>
        <li>Social</li>
      </Box>

      <Text as="p" mb={0}>
        <strong>How we seek to help</strong>
      </Text>
      <Text as="p">
        We work diligently to end all victimization against our tribal people
        through advocacy and education efforts that include prevention,
        intervention, and the fostering of resiliency.
      </Text>
    </S.WhoWeAre>
  )
}

export default WhoWeAre
