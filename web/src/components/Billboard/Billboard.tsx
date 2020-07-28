// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'

// Theme + Styles
import theme from '../../../config/theme'
import * as S from './styles.scss'

// UI
import { Box, Flex, Text, Heading } from '../ui'

// Hooks
import useScrollWatch from '../../hooks/useScrollWatch'

// ___________________________________________________________________

interface CallbackTypes {
  callbackData: any
  previousScrollTop: number
  currentScrollTop: number
}

const Billboard = () => {
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)

  // On scroll class change
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowBackground, setShouldShowBackground] = useState(false)

  // scrollWatch settings
  const MINIMUM_SCROLL = 80
  const TIMEOUT_DELAY = 400

  // scrollWatch hook to watch for page scroll
  useScrollWatch((callbackData: CallbackTypes) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShowBackground(currentScrollTop > 800)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  // Scroll state styles
  const backgroundStyle = shouldShowBackground
    ? theme.colors.secondary
    : theme.colors.primary
  const hiddenStyle = shouldHideHeader
    ? theme.colors.primary
    : theme.colors.primary

  return (
    <>
      <S.Billboard bg={backgroundStyle}>
        <Box p={4}>
          <Heading as="h1" className="t--uppercase">
            Keeping our people safe
          </Heading>
          <Text as="p">
            The Cahuilla Consortium’s goal is to recognize that domestic
            violence and abuse, including physical, mental, verbal, and
            emotional abuse, as well as stalking and dating violence, are
            serious offenses against Native women, children and families.
          </Text>
        </Box>
        <S.Telephone>
          <div className="title">Talk to an advocate</div>
          <div className="tel">1 (800) 799-SAFE</div>
        </S.Telephone>
        <S.Footnote>Crime victim advocacy &amp; crises center</S.Footnote>
      </S.Billboard>
    </>
  )
}

export default Billboard
