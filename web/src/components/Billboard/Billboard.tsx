// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'

import { Box, Flex, Text, Heading } from '../ui'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Billboard = () => {
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)

  return (
    <>
      <S.Billboard>
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
      </S.Billboard>
    </>
  )
}

export default Billboard
