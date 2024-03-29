// Who We Are Styles:

// _____________________________________________________________

import styled from 'styled-components'
import theme from '../../../gatsby-plugin-theme-ui'
import { Box, Flex } from '../../ui'

// _____________________________________________________________

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
      filter: grayscale(33%);
    }
  }
`
