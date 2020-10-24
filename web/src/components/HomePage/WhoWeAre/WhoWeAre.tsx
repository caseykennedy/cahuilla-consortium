// Who We Are Section:

// ___________________________________________________________________

import React, { useRef, useState } from 'react'

// Libraries
import Img from 'gatsby-image/withIEPolyfill'
import { Grid, Cell } from 'styled-css-grid'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// UI
import { Box, Flex, Text, Heading } from '../../ui'
import Divider from '../../ui/Divider'
import ListBox from '../../ui/ListBox'

// Components
import ImgMatch from '../../ImgMatch'
import Accordion from '../../Accordion'
import Billboard from '../../Billboard'

import Hero from '../Hero'

// Hooks
import useScrollWatch from '../../../hooks/useScrollWatch'
import usePerson from '../../../hooks/usePerson'

// ___________________________________________________________________

type CallbackTypes = {
  previousScrollTop: number
  currentScrollTop: number
}

const billboardProps = {
  bg: theme.colors.secondary,
  title: `Women<br />are<br />sacred.`
}

const Team = () => {
  const team = usePerson()
  return (
    <Grid
      columns={`repeat(auto-fit, minmax(180px, 1fr))`}
      gap={theme.space[4]}
      className="team"
    >
      {team.map(({ node: person }, idx) => (
        <Cell key={idx} className="team__cell">
          <Box mb={4} className="team__avatar">
            {person.avatar && (
              <Img
                fluid={person.avatar.asset.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={person.name}
              />
            )}
          </Box>
          <Text as="p" mb={1} fontSize={1}>
            {person.name && person.name}
          </Text>
          <Text as="p" color="gray" mb={0} fontSize={1}>
            {person.title && person.title}
          </Text>
        </Cell>
      ))}
    </Grid>
  )
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

          <Divider bg="gray" my={4} />

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
              <Text as="p" pt={5}>
                The Advisory Committee meets monthly to provide policy guidance
                and to serve as a conduit to the tribal communities.
              </Text>
            </Box>
          </Flex>

          <Divider bg="gray" my={4} />

          <Box mb={6}>
            <Box mb={5}>
              <Heading as="h2" fontSize={3} mb={0}>
                Meet our team
              </Heading>
            </Box>
            <Team />
          </Box>

          {/* <Box my={8}>
            <ImgMatch
              src="student-library.jpg"
              altText="Friends comforting each others."
            />
          </Box> */}

          <Divider bg="black" my={0} />

          <Accordion title="What is our purpose?" active={false}>
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
                  <li>- Community</li>
                  <li>- Culture</li>
                </Box>
              </Box>
            </Flex>
          </Accordion>

          <Accordion title="How we seek to help" active={false}>
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
