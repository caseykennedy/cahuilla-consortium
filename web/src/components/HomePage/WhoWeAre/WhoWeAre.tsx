// Who We Are Section:

// _____________________________________________________________

import React, { useRef } from 'react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

// Libraries
import { Grid } from 'theme-ui'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// UI
import { Box, Flex, Text, Heading } from '../../ui'
import Divider from '../../ui/Divider'
import ListBox from '../../ui/ListBox'

// Components
import Accordion from '../../Accordion'
import Billboard from '../../Billboard'
import BlockContent from '../../BlockContent'
import Hero from '../Hero'

// Hooks
import useWhoWeAre from '../../../hooks/useWhoWeAre'
import usePerson from '../../../hooks/usePerson'

// _____________________________________________________________

const billboardProps = {
  active: true,
  bg: theme.colors.secondary,
  title: `Women<br />are<br />sacred.`
}

const Team = () => {
  const team = usePerson()
  console.log('team', team)
  return (
    <Grid columns={[2, 3]} gap={theme.space[3]} className="team">
      {team.map(({ node: person }, idx) => (
        <Box key={idx} className="team__cell">
          <Box mb={2} className="team__avatar">
            {person.avatar && (
              <GatsbyImage
                image={person.avatar.asset.gatsbyImageData}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={person.name}
                className="article__img"
              />
            )}
          </Box>
          <Text as="p" mb={1} fontSize={2} fontWeight={500} lineHeight={1}>
            {person.name && person.name}
          </Text>
          <Text as="p" mb={0} color="gray" fontSize={1} lineHeight={1}>
            {person.title && person.title}
          </Text>
        </Box>
      ))}
    </Grid>
  )
}

const WhoWeAre = () => {
  const page = useWhoWeAre()
  const scrollRef = useRef<HTMLDivElement>(null)

  // // Show/Hide Billboard content
  // const [billboardActive, setBillboardActive] = useState(false)
  // // Watch for scroll position
  // useScrollWatch((callbackData: CallbackTypes) => {
  //   const { previousScrollTop, currentScrollTop } = callbackData
  //   const scrollPos =
  //     null !== scrollRef.current &&
  //     scrollRef.current.getBoundingClientRect().top

  //   setBillboardActive(scrollPos < 128)
  // })

  return (
    <S.WhoWeAre id="who" ref={scrollRef}>
      <Box width={[1, 1 / 2]}>
        <Billboard {...billboardProps} />
      </Box>
      <Box width={[1, 1 / 2]}>
        <Hero>
          <StaticImage
            src="../../../images/counseling.jpg"
            alt="Therapist and patient talking."
            placeholder="blurred"
            layout="fullWidth"
          />
        </Hero>
        <Box p={4}>
          <Heading as="h2" fontSize={3} mb={6}>
            Who we are
          </Heading>

          {page._rawLead && <BlockContent blocks={page._rawLead || []} />}

          {page._rawBody && <BlockContent blocks={page._rawBody || []} />}

          <Divider bg="gray" my={4} />

          <Text as="p" fontWeight={500} mt={4}>
            {page.advisoryCommitteeTitle}
          </Text>

          <ListBox>
            {page.advisoryCommittee.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ListBox>

          <Flex justifyContent="flex-end">
            <Box width={2 / 3} mt={5}>
              {page._rawAdvisoryNote && (
                <BlockContent blocks={page._rawAdvisoryNote || []} />
              )}
            </Box>
          </Flex>

          <Divider bg="gray" my={4} />

          <Box mb={6}>
            <Box mb={5}>
              <Heading as="h2" fontSize={3} mb={6}>
                Meet our team
              </Heading>
            </Box>

            <Team />
          </Box>

          <Divider bg="black" my={0} />

          <Accordion title="What is our purpose?">
            <Flex className="content">
              <Box width={[1 / 4]}>
                <Text as="p">Mission</Text>
              </Box>
              <Box width={[3 / 4]} pl={[0, 4]}>
                {page.whatIsOurPurpose._rawMission && (
                  <BlockContent
                    blocks={page.whatIsOurPurpose._rawMission || []}
                  />
                )}
              </Box>
            </Flex>
            <Flex className="content">
              <Box width={[1 / 4]}>
                <Text as="p">Values</Text>
              </Box>
              <Box width={[3 / 4]} pl={[0, 4]}>
                <Box as="ul">
                  {page.whatIsOurPurpose.values.map((item, idx) => (
                    <li key={idx}>- {item}</li>
                  ))}
                </Box>
              </Box>
            </Flex>
          </Accordion>

          <Accordion title="How we seek to help">
            <Flex className="content">
              <Box width={[1 / 4]}>
                <Text as="p">Advocacy</Text>
              </Box>
              <Box width={[3 / 4]} pl={[0, 4]}>
                {page.howWeSeekToHelp._rawAdvocacy && (
                  <BlockContent
                    blocks={page.howWeSeekToHelp._rawAdvocacy || []}
                  />
                )}
              </Box>
            </Flex>
          </Accordion>
        </Box>
      </Box>
    </S.WhoWeAre>
  )
}

export default WhoWeAre
