// ListBox:

// ___________________________________________________________________

// Core
import * as React from 'react'
import { Link } from 'gatsby'

import Icon from '../../Icons'

import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

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

// ___________________________________________________________________

ListBox.defaultProps = defaultProps
