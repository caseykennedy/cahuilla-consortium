// BlogPage:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

// Theme + Styles
import theme from '../../../config/theme'
import * as S from './styles.scss'

import { Box, Flex, Text, Heading, Grid } from 'theme-ui'

// Components
import BlockContent from '../BlockContent'
import Icon from '../Icons'

// Hooks
import usePost from '../../hooks/usePost'
import useLoadMore from '../../hooks/useLoadMore'

// ___________________________________________________________________

const blogPath = 'blog'

const Post: React.FC<{ post: PostQuery }> = ({ post }) => {
  return (
    <Flex className="post">
      <Link to={`/${blogPath}/${post.slug.current}`} className="inner">
        <Box>
          <Text as="p" mb={2}>
            {post.publishedAt}
          </Text>
          <Flex sx={{ justifyContent: 'flex-end', width: '100%' }}>
            <Box mb={4} sx={{ flex: 0.5 }}>
              {post.figure && (
                <Img
                  fluid={{
                    ...post.figure.asset.fluid,
                    aspectRatio: 1 / 1
                  }}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={post.title}
                  className="article__img"
                />
              )}
            </Box>
          </Flex>
          <Heading as="h4" mt={2} mb={4} className="text--md">
            {post.title}
          </Heading>
        </Box>
        <Box>
          {post._rawExcerpt && <BlockContent blocks={post._rawExcerpt || []} />}
          <Text as="span" mt={4}>
            <Link to={`/${blogPath}/${post.slug.current}`}>Read more</Link>
          </Text>
        </Box>
      </Link>
    </Flex>
  )
}

const BlogPage: React.FC = () => {
  const posts = usePost()
  const { list, handleLoadMore, hasMore } = useLoadMore(posts)
  return (
    <S.BlogPage>
      <Box>
        <Heading as="h3" mt={2} mb={3}>
          Blog
        </Heading>
      </Box>
      <Flex>
        <Grid
          columns={`repeat(auto-fit,minmax(300px,1fr))`}
          gap={theme.space[4]}
        >
          {posts.map(({ node: post }, idx) => (
            <Post post={post} key={idx} />
          ))}
        </Grid>
      </Flex>
    </S.BlogPage>
  )
}

export default BlogPage
