// Button:

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
  invert?: boolean
} & typeof defaultProps

const defaultProps = {
  to: '/'
}

const Button: React.FC<Props> = ({ children, to, invert }) => {
  return (
    <Link to={to}>
      <S.Button invert={invert}>
        {children}
        <Icon name="nextArrow" />
      </S.Button>
    </Link>
  )
}

export default Button

// _____________________________________________________________

Button.defaultProps = defaultProps
