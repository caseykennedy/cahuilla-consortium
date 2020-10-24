// What We Do Section:

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
import Divider from '../../ui/Divider'
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
  active: true,
  bg: theme.colors.primary,
  message: `The Vision of the Cahuilla Consortium Victim Advocacy Program
  (CCVAP)is to END violence and victimization in our Tribal
  communities. The CCVAP will support and promote the safety and
  well-being of our community.`,
  title: `Keeping our people safe.`
}

const WhatWeDo = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Show/Hide Billboard content
  const [billboardActive, setBillboardActive] = useState(false)
  // Watch for scroll position
  useScrollWatch((callbackData: CallbackTypes) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const scrollPos =
      null !== scrollRef.current &&
      scrollRef.current.getBoundingClientRect().top

    setBillboardActive(scrollPos > 128)
  })

  return (
    <S.WhatWeDo ref={scrollRef}>
      <Box width={[1, 1 / 2]}>
        <Billboard {...billboardProps} />
      </Box>
      <Box width={[1, 1 / 2]}>
        <Hero src="group-hands.jpg" altText="Group raising hands in the air." />
        <Box p={4} id="what">
          <Heading as="h2" fontSize={3} mb={6}>
            What we do
          </Heading>
          <Text as="p" className="t--lead">
            It is our objective to promote the safety and well-being of our
            Native communities.
          </Text>
          <Text as="p" mb={5}>
            We work to end all victimization against our tribal people through
            advocacy and education efforts that include prevention,
            intervention, and the fostering of resiliency.
          </Text>

          <Heading
            as="h4"
            color="gray"
            fontSize={5}
            fontFamily="display"
            mt={8}
          >
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

          <Heading as="h3" fontSize={3} mb={3}>
            What we can help you with
          </Heading>

          <ListBox>
            <li>Emergency short term &amp; basic needs</li>
            <li>Emergency sheltering</li>
            <li>Transitional housing</li>
            <li>Transport / Public transportation assistance</li>
            <li>Small home repair &amp; locksmith (limited)</li>
            <li>Burial/Funeral assistance (limited)</li>
            <li>Advocacy and Therapy</li>
          </ListBox>

          <Text as="p" pr={4} my={4}>
            Please talk to an Advocate to see how we may be able to assist in
            your healing journey and restoration. Call us at{' '}
            <a href="tel:1-951-330-0479" aria-label="Call us">
              <mark>1 (951) 330-0479</mark>
            </a>{' '}
            (24/7 hotline) or <mark>951-763-5547</mark> (office/center).
          </Text>

          <Divider bg="black" my={0} />

          <Accordion title="more ways we can help" active={false}>
            <Flex className="content">
              <Box width={1}>
                <Text as="p">
                  This list is a summary and is more of a snap-shot of what we
                  can assist with. Every case is different and requires flexible
                  planning.
                </Text>
              </Box>
            </Flex>

            <Flex className="content">
              <Box width={[1, 1 / 4]} mb={5}>
                <Text as="p" fontSize={1}>
                  Immediate safety
                </Text>
              </Box>
              <Box width={[1, 3 / 4]} pl={[0, 4]}>
                <ListBox>
                  <li>- Transportation to shelter/motel</li>
                  <li>- Provide emergency motel stay </li>
                  <li>
                    - Provide emergency needs (food, baby items, toiletries,
                    clothing, etc.)
                  </li>
                  <li>
                    - Transport to other providers to obtain resources (Medical,
                    BHS, Tribal Resources…)
                  </li>
                </ListBox>
              </Box>
            </Flex>

            <Flex className="content">
              <Box width={[1, 1 / 4]} mb={5}>
                <Text as="p" fontSize={1}>
                  Emergency housing
                </Text>
              </Box>
              <Box width={[1, 3 / 4]} pl={[0, 4]}>
                <ListBox>
                  <li>30-90-day shelter stay at an area shelter</li>
                  <li>
                    Transportation to obtain services (Cal-Fresh, Medical, TANF,
                    IHS, SSDI, DMV, CPS)
                  </li>
                  <li>Provide for: Groceries, Toiletries, baby items…</li>
                  <li>Provide Fuel cards</li>
                  <li>Provide short-term child care</li>
                  <li>Assist with filling out and filing Protective Orders</li>
                  <li>Provide court accompaniment </li>
                  <li>In-house therapy</li>
                  <li>Tele-therapy</li>
                  <li>Group/support/talking circles (online)</li>
                </ListBox>
              </Box>
            </Flex>

            <Flex className="content">
              <Box width={[1, 1 / 4]} mb={5}>
                <Text as="p" fontSize={1}>
                  Transitional housing
                </Text>
              </Box>
              <Box width={[1, 3 / 4]} pl={[0, 4]}>
                <ListBox>
                  <li>
                    Assist with procuring long-term housing (Provide Security
                    Deposit)
                  </li>
                  <li>
                    Can provide 3-24 months of rental assistance (payer of last
                    resort)
                  </li>
                  <li>Assist with Utility hookup</li>
                  <li>
                    Can provide monthly utility assistance (payor of last
                    resort)
                  </li>
                  <li>Assist with basic furnishings</li>
                  <li>
                    Assist with lock-smith service, “small” auto/home repairs as
                    a direct result of a crime
                  </li>
                  <li>
                    Advice on budgeting, cooking, cleaning, time management,
                    paying bills, and other basic life-skills
                  </li>
                  <li>
                    Referrals to other services (BHS, Educational Resources,
                    Group/DV Classes, etc.
                  </li>
                </ListBox>
              </Box>
            </Flex>
            <Flex className="content">
              <Box width={1}>
                <Text as="p">
                  If you don’t see something listed that you need help with,
                  please call and speak to an advocate. We may be able to offer
                  support or refer you to another agency who can help.
                </Text>
              </Box>
            </Flex>
          </Accordion>

          <Accordion title="Service area" active={false}>
            <Flex className="content">
              <Box width={1}>
                <Text as="p">
                  Our service area consists of the three consortium tribal
                  member communities within the three reservations. As well as
                  the surrounding communities of Riverside County, San Diego
                  County (north), and parts of San Bernardino County.
                  Additionally, we will also provide services to{' '}
                  <em>non-native</em> people in these service areas.
                </Text>
              </Box>
            </Flex>

            <Flex className="content">
              <Box width={[1, 1 / 4]} mb={5}>
                <Text as="p" fontSize={1}>
                  <strong>please note:</strong>
                </Text>
              </Box>
              <Box width={[1, 3 / 4]} pl={[0, 4]}>
                <Text as="p">
                  All services are dependent on available funds, however, we can
                  work with you to find other resources.
                </Text>
              </Box>
            </Flex>
          </Accordion>
        </Box>
      </Box>
    </S.WhatWeDo>
  )
}

export default WhatWeDo
