// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState, useRef } from 'react'
import { useSpring, config } from 'react-spring'

// Theme + Styles
import theme from '../../../config/theme'
import * as S from './styles.scss'

// UI
import { Box, Flex, Text, Heading, AnimatedFlex } from '../ui'

// Components
import Icon from '../Icons'

// Hooks
import useScrollWatch from '../../hooks/useScrollWatch'

// ___________________________________________________________________

type Props = {
  message?: string
} & typeof defaultProps

const defaultProps = {
  active: false,
  arrow: false,
  bg: theme.colors.primary,
  title: `Keeping our people safe.`
}

const Billboard: React.FC<Props> = ({ active, arrow, bg, message, title }) => {
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)

  const fadeIn = useSpring({
    config: config.molasses,
    // delay: 160,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })

  return (
    <S.Billboard bg={bg} p={4}>
      <AnimatedFlex className="inner" style={fadeIn}>
        {/* <Box className={`contact ${!active ? 'hide' : 'show'}`}> */}
        <Box>
          <Heading
            as="h1"
            className="t--uppercase"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <Text as="p">{message}</Text>
        </Box>
        {/* <Flex className={`contact ${!active ? 'hide' : 'show'}`}> */}
        <Flex className={`contact show`}>
          <Flex flexDirection="column" flex={2}>
            <S.Telephone>
              <Text className="t--uppercase">Talk to an advocate</Text>

              <Text fontSize={theme.fontSizes[3]} fontWeight={500}>
                1 (951) 330-0479
              </Text>
            </S.Telephone>

            <S.Footnote>Crime victim advocacy center</S.Footnote>
          </Flex>

          {arrow && (
            <Box className="scroll-arrow">
              <Icon name="nextArrow" color="white" />
            </Box>
          )}
        </Flex>
      </AnimatedFlex>
    </S.Billboard>
  )
}

export default Billboard

// ___________________________________________________________________

Billboard.defaultProps = defaultProps
