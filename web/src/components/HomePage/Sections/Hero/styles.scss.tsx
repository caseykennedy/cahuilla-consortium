// Rethink Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../../config/theme'
import { Box, Flex } from '../../../../elements'

// ___________________________________________________________________

export const Hero = styled(Flex)`
  flex-wrap: wrap;
  background: ${theme.colors.quinary};
  position: relative;
  width: 100%;
  /* height: calc(20vh - ${theme.headerHeight}); */
  min-height: 222px;
  padding: ${theme.space[5]};

  @media ${theme.mq.tablet} {
  }
`
