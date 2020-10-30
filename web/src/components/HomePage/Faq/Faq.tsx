// Faq Section:

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
import Divider from '../../ui/Divider'

// Components
import ImgMatch from '../../ImgMatch'
import Accordion from '../../Accordion'
import Billboard from '../../Billboard'
import BlockContent from '../../BlockContent'

import Hero from '../Hero'

// Hooks
import useScrollWatch from '../../../hooks/useScrollWatch'
import useFaq from '../../../hooks/useFaq'

// ___________________________________________________________________

type CallbackTypes = {
  previousScrollTop: number
  currentScrollTop: number
}

const billboardProps = {
  bg: theme.colors.tertiary,
  title: `Love<br />shouldn't<br />hurt.`
}

const Faq = () => {
  const faqs = useFaq()
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
    <S.Faq id="faq" ref={scrollRef}>
      <Box width={[1, 1 / 2]}>
        <Billboard active={billboardActive} {...billboardProps} />
      </Box>
      <Box width={[1, 1 / 2]}>
        <Hero
          src="stop-hand.jpg"
          altText="Girl holding hand up palm facing forward"
        />
        <Box p={4}>
          <Heading as="h2" fontSize={3} mb={6}>
            Faq
          </Heading>

          <Text as="p">
            If you don’t see something listed that you need help with, please
            call and speak to an advocate. We may be able to offer support or
            refer you to another agency who can help.
          </Text>

          <Divider bg="gray" my={0} />

          {faqs.map(({ node: faq }, idx) => (
            <Accordion title={faq.question} key={idx}>
              <Flex className="content">
                <Box>
                  {faq._rawAnswer && (
                    <BlockContent blocks={faq._rawAnswer || []} />
                  )}
                </Box>
              </Flex>
            </Accordion>
          ))}
        </Box>
      </Box>
    </S.Faq>
  )
}

export default Faq
