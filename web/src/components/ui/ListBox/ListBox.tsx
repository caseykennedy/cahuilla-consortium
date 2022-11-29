// ListBox:

// _____________________________________________________________

// Core
import * as React from 'react'
import { Link } from 'gatsby'

import Icon from '../../Icons'

import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// _____________________________________________________________

type Props = {
  children?: React.ReactNode
} & typeof defaultProps

const defaultProps = {}

const ListBox: React.FC<Props> = ({ children }) => {
  return (
    <S.ListBox as="ul">
      {children}
    </S.ListBox>
  )
}

export default ListBox

// _____________________________________________________________

ListBox.defaultProps = defaultProps
