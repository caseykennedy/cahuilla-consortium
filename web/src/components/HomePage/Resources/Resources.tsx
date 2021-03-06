// Resources Section:

// ___________________________________________________________________

import React, { useRef, useState, useLayoutEffect } from 'react'

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
import Icon from '../../Icons'

import Hero from '../Hero'

// Hooks
import useScrollWatch from '../../../hooks/useScrollWatch'

// ___________________________________________________________________

type CallbackTypes = {
  previousScrollTop: number
  currentScrollTop: number
}

const billboardProps = {
  bg: theme.colors.primary,
  title: `Live a life without violence.`
}

const Resources = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Show/Hide Billboard content
  const [billboardActive, setBillboardActive] = useState(false)

  // // Watch for scroll position
  // useScrollWatch((callbackData: CallbackTypes) => {
  //   const { previousScrollTop, currentScrollTop } = callbackData
  //   const scrollPos =
  //     null !== scrollRef.current &&
  //     scrollRef.current.getBoundingClientRect().top

  //   setBillboardActive(scrollPos < 128)
  // })

  return (
    <S.Resources id="resources" ref={scrollRef}>
      <Box width={[1, 1 / 2]}>
        <Billboard active={billboardActive} {...billboardProps} />
      </Box>
      <Box width={[1, 1 / 2]}>
        <S.ButtonGroup>
          <a
            href={`mailto: info@cahuillaconsortium.org?subject=Contact from CahuillaConsortium.org`}
            target="_blank"
          >
            <Heading fontFamily="heading" className="text--lg">Get in touch</Heading>
            <Flex>
              <p>We're always here for you.</p>
              <Icon name="nextArrow" />
            </Flex>
          </a>
          <a
            href={`mailto: info@cahuillaconsortium.org?subject=Volunteer Request from CahuillaConsortium.org`}
            target="_blank"
          >
            <Heading fontFamily="heading" className="text--lg">Volunteer</Heading>
            <Flex>
              <p>Helping others is the best medicine.</p>
              <Icon name="nextArrow" />
            </Flex>
          </a>
        </S.ButtonGroup>
      </Box>
    </S.Resources>
  )
}

export default Resources
