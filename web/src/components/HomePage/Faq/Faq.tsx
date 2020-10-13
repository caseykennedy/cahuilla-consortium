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
  bg: theme.colors.tertiary,
  title: `Women<br />are<br />sacred.`
}

const Faq = () => {
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
        <Hero src="counseling.jpg" altText="Therapist and patient talking." />
        <Box p={4}>
          <Heading as="h3" mb={6}>
            Faq
          </Heading>

          <Text as="p" className="t--lead">
            We need content here. We need content here. We need content here. We
            need content here. We need content here. We need content here. We
            need content here. We need content here.
          </Text>

          <Text as="p">
            We need content here. We need content here. We need content here. We
            need content here. We need content here.
          </Text>

          <hr />

          <Accordion title="What is domestic violence?">
            <Flex className="content">
              <Box>
                <Text as="p">
                  Generally, domestic violence is a pattern of behavior,
                  including physical violence or sexual violence, by an intimate
                  (current or former) partner. It is seen in both male/female
                  and same sex partner relationships.
                </Text>
                <Text as="p">
                  <strong>
                    Domestic violence takes many forms and includes a range of
                    actions intended to control:
                  </strong>
                </Text>
              </Box>
            </Flex>
            <Flex className="content">
              <Box width={[1 / 4]}>
                <Text as="p">Red flags</Text>
              </Box>
              <Box width={[3 / 4]} pl={[0, 4]}>
                <Box as="ul">
                  <li>- using children</li>
                  <li>- emotional abuse</li>
                  <li>- economic abuse</li>
                  <li>- coercion and threats</li>
                  <li>- minimizing, denying and blaming</li>
                  <li>- cultural abuse</li>
                  <li>- ritual abuse</li>
                  <li>- male privilege</li>
                  <li>- sexual abuse</li>
                </Box>
              </Box>
            </Flex>
          </Accordion>

          <Accordion title="Are you living with domestic violence?">
            <Flex className="content">
              <Box>
                <Text as="p">Need content.</Text>
              </Box>
            </Flex>
          </Accordion>

          <Accordion title="Are you a victim?">
            <Flex className="content">
              <Box>
                <Text as="p">Need content.</Text>
              </Box>
            </Flex>
          </Accordion>

          <Accordion title="What can you do?">
            <Flex className="content">
              <Box>
                <Text as="p">Need content.</Text>
              </Box>
            </Flex>
          </Accordion>

          <Accordion title="How to get help">
            <Flex className="content">
              <Box>
                <Text as="p">Need content.</Text>
              </Box>
            </Flex>
          </Accordion>
        </Box>
      </Box>
    </S.Faq>
  )
}

export default Faq
