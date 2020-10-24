// Who We Are Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import theme from '../../../../config/theme'
import { Box, Flex } from '../../ui'

// ___________________________________________________________________

export const WhoWeAre = styled(Flex)`
  flex-wrap: wrap;
  

  @media ${theme.mq.tablet} {
  }

  .team {
    &__cell {

    }

    &__avatar {
      overflow: hidden;
      /* mix-blend-mode: hard-light; */
      filter: grayscale(20%);
    }
  }
`
