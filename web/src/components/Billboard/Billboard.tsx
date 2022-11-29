// Header:
// Site Header with logo

// _____________________________________________________________

import React, { useState, useRef } from 'react'
import { useSpring, config } from 'react-spring'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// UI
import { Box, Flex, Text, Heading, AnimatedFlex } from '../ui'

// Components
import Icon from '../Icons'

// Hooks
import useContact from '../../hooks/useContact'

// _____________________________________________________________

type Props = {
  message?: string
  arrow?: boolean
} & typeof defaultProps

const defaultProps = {
  active: false,
  bg: theme.colors.primary,
  title: `Keeping our people safe.`
}

const Billboard: React.FC<Props> = ({ active, arrow, bg, message, title }) => {
  const contact = useContact()
  const fadeIn = useSpring({
    config: config.molasses,
    // delay: 160,
    from: { opacity: 0, transform: theme.transform.matrix.from },
    to: { opacity: 1, transform: theme.transform.matrix.to }
  })
  return (
    <S.Billboard bg={bg}>
      <AnimatedFlex className="inner" style={fadeIn}>
        <Box p={4}>
          <Heading
            as="h2"
            mb={0}
            className="t--uppercase"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <Text as="p" className="t--small">
            {message}
          </Text>
        </Box>
        <Flex mt={[7, 0]} p={4} className={`contact show`}>
          <Flex flexDirection="column" flex={2}>
            <S.Telephone>
              <Text
                fontSize={1}
                fontWeight={500}
                lineHeight={1}
                className="t--uppercase"
              >
                Talk to an advocate
              </Text>

              <Text
                fontSize={3}
                fontWeight={500}
                lineHeight={1}
                dangerouslySetInnerHTML={{ __html: contact.hotline }}
              />
            </S.Telephone>

            <Box mt={[4, 2, 4]} fontSize={2} fontWeight={500}>
              Crime victim advocacy center
            </Box>
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

// _____________________________________________________________

Billboard.defaultProps = defaultProps
