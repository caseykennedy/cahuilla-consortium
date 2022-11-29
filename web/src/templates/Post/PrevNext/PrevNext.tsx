// Previous / Next pre-footer
// TODO: button bg image

// _____________________________________________________________

import React from 'react'

// Components
import Icon from '../../../components/Icons'

// Elements
import { Flex } from '../../../components/ui'

// Theme
import * as S from './styles.scss'
import theme from '../../../gatsby-plugin-theme-ui'

// _____________________________________________________________

const path = 'blog'

const PrevNext: React.FC<PostContextShape> = ({ pageContext }) => {
  const prev = pageContext.prev
  const next = pageContext.next
  return (
    <S.PrevNext width={1}>
      {prev && (
        <S.Button to={`/${path}/${prev.slug.current}`}>
          <Flex className="button__title">
            {prev.title}
            <span>
              <Icon name="nextArrow" />
            </span>
          </Flex>
        </S.Button>
      )}
      {next && (
        <S.Button to={`/${path}/${next.slug.current}`}>
          <Flex className="button__title button__title--next">
            {next.title}
            <span>
              <Icon name="nextArrow" />
            </span>
          </Flex>
        </S.Button>
      )}
    </S.PrevNext>
  )
}

export default PrevNext
