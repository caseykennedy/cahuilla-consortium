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
import BlockContent from '../../BlockContent'

import Hero from '../Hero'

// Hooks
import useWhatWeDo from '../../../hooks/useWhatWeDo'

// ___________________________________________________________________

type CallbackTypes = {
  previousScrollTop: number
  currentScrollTop: number
}

const billboardProps = {
  active: true,
  arrow: true,
  bg: theme.colors.primary,
  // message: `The Vision of the Cahuilla Consortium Victim Advocacy Program
  // (CCVAP)is to END violence and victimization in our Tribal
  // communities. The CCVAP will support and promote the safety and
  // well-being of our community.`,
  title: `Keeping our<br />people safe.`
}

const WhatWeDo = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const page = useWhatWeDo()

  // // Show/Hide Billboard content
  // const [billboardActive, setBillboardActive] = useState(false)
  // // Watch for scroll position
  // useScrollWatch((callbackData: CallbackTypes) => {
  //   const { previousScrollTop, currentScrollTop } = callbackData
  //   const scrollPos =
  //     null !== scrollRef.current &&
  //     scrollRef.current.getBoundingClientRect().top

  //   setBillboardActive(scrollPos > 128)
  // })

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
            {page.lead && page.lead}
          </Text>
          {page._rawBody && <BlockContent blocks={page._rawBody || []} />}

          <Divider bg="gray" my={4} />

          <Heading
            as="h4"
            color="gray"
            fontSize={5}
            fontFamily="display"
            mt={8}
            dangerouslySetInnerHTML={{ __html: page.statement }}
          />

          <Box width={1} mb={[6]} style={{mixBlendMode: 'luminosity'}}>
            {page.figure && (
              <Img
                fluid={page.figure.asset.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={page.figure.alt}
              />
            )}
          </Box>

          <Heading as="h3" fontSize={3} mb={3}>
            What we can help you with
          </Heading>

          <ListBox>
            {page.whatWeHelpWith.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ListBox>

          <Box my={4}>
            {page._rawWeCanHelp && (
              <BlockContent blocks={page._rawWeCanHelp || []} />
            )}
          </Box>

          <Divider bg="black" my={0} />

          <Accordion title="more ways we can help" active={false}>
            <Flex className="content">
              <Box width={1}>
                {page.moreWaysWeCanHelp._rawBody && (
                  <BlockContent
                    blocks={page.moreWaysWeCanHelp._rawBody || []}
                  />
                )}
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
                  {page.moreWaysWeCanHelp.immediateSafety.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
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
                  {page.moreWaysWeCanHelp.emergencyHousing.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
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
                  {page.moreWaysWeCanHelp.transitionalHousing.map(
                    (item, idx) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
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
                {page.serviceArea._rawBody && (
                  <BlockContent blocks={page.serviceArea._rawBody || []} />
                )}
              </Box>
            </Flex>

            <Flex className="content">
              <Box width={[1, 1 / 4]} mb={5}>
                <Text as="p" fontSize={1}>
                  <strong>please note:</strong>
                </Text>
              </Box>
              <Box width={[1, 3 / 4]} pl={[0, 4]}>
                {page.serviceArea._rawNote && (
                  <BlockContent blocks={page.serviceArea._rawNote || []} />
                )}
              </Box>
            </Flex>
          </Accordion>
        </Box>
      </Box>
    </S.WhatWeDo>
  )
}

export default WhatWeDo
