// Accordion Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { darken } from 'polished'

// Theme
import theme from '../../../config/theme'

// UI
import { Box, Flex } from '../ui'

// Begin Styles
// ___________________________________________________________________

// export const AccordionContainer = styled.div<{ chevronColor: string }>`

export const AccordionContainer = styled.div<{ borderColor?: string, borderTop?: boolean }>`
  width: 100%;
  position: relative;
  border-bottom: 1px solid ${p => p.borderColor};
  border-top: ${p => !p.borderTop ? 'none' : theme.border};

  /* &:first-child {
    border-top: none;
  } */
`

export const AccordionInner = styled.div`
  display: flex;
  flex-direction: column;

  .rotate {
    transform: rotate(45deg);
  }
`

export const AccordionToggle = styled(Flex)<{ bg?: string, colorActive?: string, color?: string }>`
  align-items: center;
  justify-content: space-between;
  background: ${p => p.bg};
  color: ${p => p.color};
  cursor: pointer;

  border: none;
  outline: none;
  transition: color 0.6s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover,
  &.active  {
    color: ${p => p.colorActive};
  }
`

export const AccordionToggleInner = styled(Flex)`
  flex-direction: column;

  @media ${theme.mq.tablet} {
    flex-direction: row;
  }

  h4 {
    font-weight: 500;
    margin-bottom: 0;

    @media ${theme.mq.desktop} {
    }
  }
`

export const AccordionContent = styled(Box)`
  overflow: hidden;
  transition: max-height 0.3s ease;

  .content {
    flex-wrap: wrap;
    border-top: 1px solid ${theme.colors.gray};
    padding-top: ${theme.space[4]};
    padding-bottom: ${theme.space[4]};
  }
`

export const Carat = styled(Box)<{ chevronColor?: string, chevronWidth?: string }>`
  /* margin-right: ${theme.space[2]}; */
  transition: transform 0.3s ease;

  @media ${theme.mq.tablet} {
    margin-right: ${theme.space[3]};
  }

  svg {
    fill: ${p => p.chevronColor};
    width: ${theme.space[4]};

    @media ${theme.mq.tablet} {
      width: ${p => !p.chevronWidth ? theme.space[6] : p.chevronWidth};
    }
  }
`
