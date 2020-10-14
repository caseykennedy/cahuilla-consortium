// Blog Section:

// ___________________________________________________________________

import React, { useRef, useState } from 'react'

// Libraries
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import { Grid, Cell } from 'styled-css-grid'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// UI
import { Box, Flex, Text, Heading } from '../../ui'

// ___________________________________________________________________

const Blog = () => {
  return (
    <S.Blog id="blog">
      <Box width={[1, 1 / 4]}>
        <Heading as="h4" mb={4}>Blog</Heading>
      </Box>
      <Flex width={[1, 3 / 4]} flexWrap="wrap">
        <Grid columns="repeat(auto-fit,minmax(400px,1fr))" gap={theme.space[4]}>
          {data.map((post, idx) => (
            <Cell className="post" key={idx}>
              <Text as="p" color="gray" fontSize={1} fontWeight={500} mb={2}>
                {post.date}
              </Text>
              <Text as="h2" mb={4}>
                {post.title}
              </Text>
              <Text as="p">{post.excerpt}</Text>
              <Link to="/">
                <Text as="span" fontSize={1} mt={4}>
                  Read more
                </Text>
              </Link>
            </Cell>
          ))}
        </Grid>
      </Flex>
    </S.Blog>
  )
}

export default Blog

const data = [
  {
    date: 'Friday — April 12, 2020',
    title: 'So why didn’t you just leave?',
    excerpt:
      'That question is the most frequently asked one regarding a battering situation and the one that causes anguish for so many domestic violence survivors.'
  },
  {
    date: 'Friday — April 12, 2020',
    title: 'Women Are Sacred',
    excerpt:
      'That question is the most frequently asked one regarding a battering situation and the one that causes anguish for so many domestic violence survivors.'
  },
  {
    date: 'Friday — April 12, 2020',
    title: 'Women Are Sacred',
    excerpt:
      'That question is the most frequently asked one regarding a battering situation and the one that causes anguish for so many domestic violence survivors.'
  },
  {
    date: 'Friday — April 12, 2020',
    title: 'Women Are Sacred',
    excerpt:
      'That question is the most frequently asked one regarding a battering situation and the one that causes anguish for so many domestic violence survivors.'
  }
]
