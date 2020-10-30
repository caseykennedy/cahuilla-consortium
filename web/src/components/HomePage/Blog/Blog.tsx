// Blog Section:

// ___________________________________________________________________

import React, { useRef, useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Libraries
import { Grid, Cell } from 'styled-css-grid'

// Theme + Styles
import * as S from './styles.scss'
import theme from '../../../../config/theme'

// UI
import { Box, Flex, Text, Heading } from '../../ui'

// Components
import BlockContent from '../../BlockContent'

// Hooks
import usePost from '../../../hooks/usePost'

// ___________________________________________________________________

const blogPath = 'blog'

const Post: React.FC<{ post: PostQuery }> = ({ post }) => {
  return (
    <Cell className="post">
      <Box>
        <Text as="p" fontSize={1} fontWeight={500} mb={2}>
          {post.publishedAt}
        </Text>
        <Flex width={1} justifyContent="flex-end">
          <Box width={1 / 3}>
            {post.figure && (
              <Img
                fluid={post.figure.asset.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={post.title}
                className="article__img"
              />
            )}
          </Box>
        </Flex>
        <Heading as="h4" mt={2} mb={4} className="text--lg">
          {post.title}
        </Heading>
      </Box>
      <Box>
        {post._rawExcerpt && <BlockContent blocks={post._rawExcerpt || []} />}
        <Text as="span" fontSize={2} mt={4}>
          <Link to={`/${blogPath}/${post.slug.current}`}>Read more</Link>
        </Text>
      </Box>
    </Cell>
  )
}

const Blog = () => {
  const posts = usePost()
  console.log(posts)
  return (
    <S.Blog id="blog">
      <Box width={[1]}>
        <Heading as="h4" mb={4}>
          Blog
        </Heading>
      </Box>
      <Flex width={[1]} flexWrap="wrap">
        <Grid columns="repeat(auto-fit,minmax(300px,1fr))" gap={theme.space[4]}>
          {posts.map(({ node: post }, idx) => (
            <Post post={post} key={idx} />
          ))}
        </Grid>
      </Flex>
    </S.Blog>
  )
}

export default Blog
