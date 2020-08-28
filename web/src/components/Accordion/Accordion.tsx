// Accordion:

// ___________________________________________________________________

import React, { useState, useRef } from 'react'

import { Box, Flex, Text, Heading } from '../ui'
import Icon from '../Icons'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  active?: boolean
  children: React.ReactNode
  title: string
  color?: string
  chevronColor?: string
  chevronWidth?: string
  borderColor?: string
  borderTop?: boolean
  colorActive?: string
  bg?: string
  fontSize?: number | number[] | string
  subTitle?: string
  pt?: number | number[] | string
  pb?: number | number[] | string
  pr?: number | number[] | string
  pl?: number | number[] | string
}

// ___________________________________________________________________

const Accordion: React.FC<Props> = ({
  active,
  bg,
  borderColor,
  borderTop,
  chevronColor,
  chevronWidth,
  children,
  color,
  colorActive,
  fontSize,
  subTitle,
  pt,
  pb,
  pr,
  pl,
  title
}) => {
  // Reference the accordion content height
  const refContent = useRef<HTMLDivElement>(null)

  // Accordion hooks
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('accordion-icon')

  

  // Toggle classes / height
  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    if (null !== refContent) {
      setHeightState(
        setActive === 'active' ? '0px' : `${refContent.current.scrollHeight}px`
      )
    }
    setRotateState(
      setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate'
    )
  }
  return (
    <S.AccordionContainer borderColor={borderColor} borderTop={borderTop}>
      <S.AccordionInner>
        <S.AccordionToggle
          className={setActive}
          onClick={toggleAccordion}
          color={color}
          colorActive={colorActive}
          bg={bg}
          pt={pt}
          pr={pr}
          pb={pb}
          pl={pl}
        >
          <S.AccordionToggleInner width={2 / 3}>
            <Heading as="h4" fontSize={fontSize} width={1}>
              {title}
            </Heading>
            {subTitle && (
              <Text as="span" mb={0}>
                {subTitle}
              </Text>
            )}
          </S.AccordionToggleInner>
          <S.Carat
            className={setRotate}
            chevronColor={chevronColor}
            chevronWidth={chevronWidth}
          >
            <Icon name="carat" color="black" />
          </S.Carat>
        </S.AccordionToggle>
        <S.AccordionContent
          ref={refContent}
          style={{ maxHeight: `${setHeight}` }}
        >
          {children}
        </S.AccordionContent>
      </S.AccordionInner>
    </S.AccordionContainer>
  )
}

export default Accordion

// ___________________________________________________________________

const defaultProps = {
  pt: [4],
  pb: [4],
  pr: [0],
  pl: [0],
  title: 'title',
  color: theme.colors.text,
  chevronColor: theme.colors.text,
  chevronWidth: theme.space[2],
  borderColor: theme.colors.text,
  borderTop: false,
  colorActive: theme.colors.text
}

Accordion.defaultProps = defaultProps
