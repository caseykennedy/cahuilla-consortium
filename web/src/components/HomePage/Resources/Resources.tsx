// Resources Section:

// ___________________________________________________________________

import * as React from 'react'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// UI
import { Box, Flex, Text, Heading } from '../../ui'

// Components
import Billboard from '../../Billboard'
import Icon from '../../Icons'

// ___________________________________________________________________

const billboardProps = {
  bg: theme.colors.primary,
  title: `Live a life without violence.`
}

const Resources = () => {
  return (
    <S.Resources id="resources">
      <Box width={[1, 1 / 2]}>
        <Billboard active={false} {...billboardProps} />
      </Box>
      <Box width={[1, 1 / 2]}/>
    </S.Resources>
  )
}

export default Resources

// ___________________________________________________________________

const data = [
  {
    title: 'Get in touch',
    desc: "We're always here for you.",
    link:
      'info@cahuillaconsortium.org?subject=Contact from CahuillaConsortium.org'
  },
  {
    title: 'Volunteer',
    desc: 'Helping others is the best medicine.',
    link:
      'info@cahuillaconsortium.org?subject=Volunteer Request from CahuillaConsortium.org'
  }
]
