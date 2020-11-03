// Faq Section:

// ___________________________________________________________________

import React, { useRef, useState } from 'react'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// UI
import { Box, Flex, Text, Heading } from '../../ui'
import Divider from '../../ui/Divider'

// Components
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

          <Accordion title="What is domestic violence?" active={true}>
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
                <Text as="p">
                  <Text as="mark" bg="primary" color="white">
                    Red flags
                  </Text>
                </Text>
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

          {faqs.map(({ node: faq }, idx) => (
            <Accordion title={faq.question} key={idx} active={false}>
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
