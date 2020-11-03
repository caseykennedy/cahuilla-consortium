// HideWindow:

// ___________________________________________________________________

import React, { useRef, useState } from 'react'
import { Link } from 'gatsby'

// UI
import { Box, Heading } from '../../ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// Components
import Icon from '../../Icons'
import Hide from '../../Hide'
import Show from '../../Show'
import ImgMatch from '../../ImgMatch'
import Portal from '../../Portal'
import Overlay from '../../Overlay'

// ___________________________________________________________________

type Props = {
  mainRef: React.RefObject<HTMLDivElement>
} & typeof defaultProps

const defaultProps = {}

const HideWindow: React.FC<Props> = ({ mainRef }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const exitRef = useRef<HTMLDivElement>(null)

  // Navigation toggle
  const [isHidden, setIsHidden] = useState(false)
  const toggleModal = () => setIsHidden(!isHidden)

  // Framer animation
  const motionProps = {
    initial: 'hidden',
    animate: 'visible',
    transition: { delay: 0.5, duration: 0.5 },
    variants: {
      hidden: { height: 0, opacity: 0 },
      visible: { height: theme.headerHeight, opacity: 1 }
    }
  }
  return (
    <>
      <Portal
        id="hide-root"
        root="main-root"
        isOpen={isHidden}
        handleExit={() => setIsHidden(false)}
        scrollRef={scrollRef}
        mainRef={mainRef}
        exitRef={exitRef}
      >
        <Overlay
          className={`nav-bg ${!isHidden ? 'nav-bg--closed' : 'nav-bg--open'}`}
        >
          <Box p={4}>
            <Heading as="h4" color="white" fontSize={[4, 5]}>
              If we can rediscover in ourselves the hidden beauty of this
              receptive devotion, if we can learn how to be still without
              inaction, how to ‘further life’ without willed purpose, how to
              serve without demanding prestige, and how to nourish without
              domination: then we shall be women again out of whose earth the
              light may shine.
            </Heading>

            <Heading as="p" color="gray" fontSize={[2, 3]}>
            —Helen M. Luke, The Way of Woman. Awakening the Perennial Feminine
            </Heading>

            
          </Box>
        </Overlay>
      </Portal>

      <S.HideWindow
        onClick={toggleModal}
        aria-lable="hide-page"
        className={`${!isHidden ? '' : 'active'}`}
      >
        {!isHidden ? <Hide /> : <Show />}
      </S.HideWindow>
    </>
  )
}

export default HideWindow

// ___________________________________________________________________

HideWindow.defaultProps = defaultProps
