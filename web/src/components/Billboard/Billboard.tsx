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

// Hooks
import useScrollWatch from '../../hooks/useScrollWatch'

// ___________________________________________________________________

type Props = {
  active?: boolean
  bg?: string
  message?: string
  title: string
}

const Billboard: React.FC<Props> = ({ active, bg, message, title }) => {
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)

  const fadeAnimation = useSpring({
    config: config.molasses,
    // delay: 160,
    from: { transform: theme.transform.matrix.from },
    to: { transform: theme.transform.matrix.to }
  })

  return (
    <>
      <S.Billboard bg={bg}>
        <AnimatedFlex className="inner" style={fadeAnimation}>
          <Box p={4}>
            <Heading as="h1" className="t--uppercase">
              {title}
            </Heading>
            <Text as="p">{message}</Text>
          </Box>
          {active && (
            <>
              <S.Telephone>
                <div className="title">Talk to an advocate</div>
                <div className="tel">1 (951) 330-0479</div>
              </S.Telephone>
              <S.Footnote>Crime victim advocacy &amp; crises center</S.Footnote>
            </>
          )}
        </AnimatedFlex>
      </S.Billboard>
    </>
  )
}

export default Billboard

// ___________________________________________________________________

const defaultProps = {
  active: false,
  bg: theme.colors.primary,
  title: `Keeping our people safe.`
}

Billboard.defaultProps = defaultProps
