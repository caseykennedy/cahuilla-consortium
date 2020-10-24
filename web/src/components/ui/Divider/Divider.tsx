import * as React from 'react'
import { Box } from 'rebass'
import theme from '../../../../config/theme'

type Props = {
  bg?: any
  my?: any
  py?: any
}

const Divider: React.FC<Props> = ({ bg, my, py }) => (
  <Box bg={bg} my={my} py={py} css={{ height: 1 }} />
)

Divider.defaultProps = {
  bg: theme.colors.background,
  my: 4,
  py: 0
}

export default Divider
