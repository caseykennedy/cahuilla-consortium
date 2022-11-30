// Staff Styles:

// _____________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../components/ui'

import theme from '../../gatsby-plugin-theme-ui'

// _____________________________________________________________

export const Post = styled(Box)`
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;

  padding-top: calc(${theme.headerHeight});

  @media ${theme.mq.tablet} {
    max-width: 75%;
    padding-top: 0;
  }

  @media ${theme.mq.desktop} {
    max-width: 800px;
    padding-left: ${theme.space[4]};
  }

  p {
    margin: 0 0 ${theme.space[5]} 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .social-share {
    align-items: center;
    margin-top: ${theme.space[7]};

    p {
      color: ${theme.colors.gray};
      font-size: calc(${theme.fontSizes[1]} / 1.15);
      margin: 0 ${theme.space[3]} 0 0;
    }

    .ico {
      margin-left: ${theme.space[2]};
    }
  }
`

export const PageTitle = styled(Box)`
  background: ${theme.colors.text};
  position: sticky;
  top: 0;
  height: ${theme.headerHeight};
  width: 100%;
  z-index: 9;
`
