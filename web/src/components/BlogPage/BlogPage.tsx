// BlogPage:

// _____________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

// Theme + Styles
import theme from '../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

import { Button, Box, Flex, Text, Heading, Grid } from 'theme-ui'

// Components
import BlockContent from '../BlockContent'

// Hooks
import usePost from '../../hooks/usePost'
import useLoadMore from '../../hooks/useLoadMore'

// _____________________________________________________________

const blogPath = 'blog'

const Post: React.FC<{ post: PostQuery }> = ({ post }) => {
  return (
    <Flex className="post">
      <Link to={`/${blogPath}/${post.slug.current}`} className="inner">
        <Box>
          <Flex sx={{ justifyContent: 'flex-end', width: '100%' }}>
            <Box sx={{ flex: 1 }}>
              {post.figure && (
                <GatsbyImage
                  image={post.figure.asset.gatsbyImageData}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={post.title}
                  sizes="300px"
                />
              )}
            </Box>
          </Flex>
          <div>
            <Text as="p" mt={4} sx={{ fontSize: 1, fontWeight: 500 }}>
              {post.publishedAt}
            </Text>
            <Heading as="h4" mt={1} mb={2} className="text--md">
              {post.title}
            </Heading>
          </div>
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
  const { list, handleLoadMore, hasMore } = useLoadMore(posts, 8)
  return (
    <S.BlogPage>
      <Box>
        <Heading as="h3" mt={2} mb={3}>
          Blog
        </Heading>
      </Box>
      <Flex sx={{ flexDirection: 'column' }}>
        <Grid
          columns={`repeat(auto-fit,minmax(300px,1fr))`}
          gap={theme.space[4]}
        >
          {list.map(({ node: post }, idx) => (
            <Post post={post} key={idx} />
          ))}
        </Grid>

        <Box mt={6}>
          {hasMore && (
            <Button onClick={handleLoadMore} className="load-more">
              Load More +
            </Button>
          )}
        </Box>
      </Flex>
    </S.BlogPage>
  )
}

export default BlogPage
