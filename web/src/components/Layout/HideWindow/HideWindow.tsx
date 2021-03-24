// HideWindow:

// ___________________________________________________________________

import React, { useRef, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

// UI
import { Box, Heading } from '../../ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// Components
import Hide from '../../Hide'
import Show from '../../Show'
import Portal from '../../Portal'

// ___________________________________________________________________

type QuoteShape = {
  quote: {
    nodes: {
      quote: string
      source: string
    }[]
  }
}

type Props = {
  mainRef: React.RefObject<HTMLDivElement>
}

const HideWindow: React.FC<Props> = ({ mainRef }) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const exitRef = useRef<HTMLDivElement>(null)

  // Navigation toggle
  const [isHidden, setIsHidden] = useState(false)
  const toggleModal = () => setIsHidden(!isHidden)

  // Get the quote from Sanity
  const data = useStaticQuery<QuoteShape>(graphql`
    query QuoteQuery {
      quote: allSanityHiddenQuote {
        nodes {
          quote
          source
        }
      }
    }
  `)
  const quote = data.quote.nodes[0]
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
        <S.Overlay
          className={`nav-bg ${!isHidden ? 'nav-bg--closed' : 'nav-bg--open'}`}
        >
          <Box p={4}>
            <Heading as="h4" color="gray" fontSize={[4, 5]}>
              {quote.quote}
            </Heading>

            <Heading as="p" color="gray" fontSize={[2, 3]}>
              —{quote.source}
            </Heading>
          </Box>
        </S.Overlay>
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
