// Who We Are Section:

// ___________________________________________________________________

import React, { useRef, useState } from 'react'

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
import Billboard from '../../Billboard'

import Hero from '../Hero'

// Hooks
import useScrollWatch from '../../../hooks/useScrollWatch'

// ___________________________________________________________________

type CallbackTypes = {
  previousScrollTop: number
  currentScrollTop: number
}

const billboardProps = {
  bg: theme.colors.secondary,
  title: `Women<br />are<br />sacred.`
}

const WhoWeAre = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Show/Hide Billboard content
  const [billboardActive, setBillboardActive] = useState(false)
  // Watch for scroll position
  useScrollWatch((callbackData: CallbackTypes) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const scrollPos =
      null !== scrollRef.current &&
      scrollRef.current.getBoundingClientRect().top

    setBillboardActive(scrollPos < 128)
  })

  return (
    <S.WhoWeAre id="who" ref={scrollRef}>
      <Box width={[1, 1 / 2]}>
        <Billboard active={billboardActive} {...billboardProps} />
      </Box>
      <Box width={[1, 1 / 2]}>
        <Hero src="counseling.jpg" altText="Therapist and patient talking." />
        <Box p={4}>
          <Heading as="h2" fontSize={3} mb={6}>
            Who we are
          </Heading>

          <Text as="p" className="t--lead">
            The Cahuilla Consortium was formed by the Lost Los Coyotes Band of
            Cahuilla and Cupeńo Indians, the Cahuilla Band of Indians (Current
            Lead), and the Santa Rosa Band of Cahuilla Indians.
          </Text>

          <Text as="p">
            We have been advocating for Victims of Domestic Vioilence, Sexual
            Assault, Stalking, and Sex/Human Trafficking since 2010. We can now
            assist victims of crime.
          </Text>

          <hr />

          <Text as="p" fontWeight={500} mt={4}>
            Each Tribe is represented on our Advisory Committee:
          </Text>

          <ListBox>
            <li>One delegate from each of the Consortium Tribes</li>
            <li>A representative from California Indian Legal Services</li>
            <li>A representative from our local Indian Health Clinic</li>
          </ListBox>

          <Flex justifyContent="flex-end">
            <Box width={2 / 3}>
              <Text as="p" py={6}>
                The Advisory Committee meets monthly to provide policy guidance
                and to serve as a conduit to the tribal communities.
              </Text>
            </Box>
          </Flex>

          <hr />

          <Box my={8}>
            <ImgMatch
              src="student-library.jpg"
              altText="Friends comforting each others."
            />
          </Box>

          <Accordion title="What is our purpose?" active={true}>
            <Flex className="content">
              <Box width={[1 / 4]}>
                <Text as="p">Mission</Text>
              </Box>
              <Box width={[3 / 4]} pl={[0, 4]}>
                <Text as="p">
                  It is our mission to promote the health, safety, and
                  well-being of our community members who have been victimized
                  by violence.
                </Text>
              </Box>
            </Flex>
            <Flex className="content">
              <Box width={[1 / 4]}>
                <Text as="p">Values</Text>
              </Box>
              <Box width={[3 / 4]} pl={[0, 4]}>
                <Box as="ul">
                  <li>- Education</li>
                  <li>- Housing</li>
                  <li>- Respite</li>
                  <li>- Vocation</li>
                  <li>- Social</li>
                </Box>
              </Box>
            </Flex>
          </Accordion>

          <Accordion title="How we seek to help" active={true}>
            <Flex className="content">
              <Box width={[1 / 4]}>
                <Text as="p">Advocacy</Text>
              </Box>
              <Box width={[3 / 4]} pl={[0, 4]}>
                <Text as="p">
                  We work diligently to end all victimization against our tribal
                  people through advocacy and education efforts that include
                  prevention, intervention, and the fostering of resiliency.
                </Text>
              </Box>
            </Flex>
          </Accordion>
        </Box>
      </Box>
    </S.WhoWeAre>
  )
}

export default WhoWeAre
