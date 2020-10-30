// usePost hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const usePost = () => {
  const data = useStaticQuery<PostShape>(graphql`
    query PostQuery {
      posts: allSanityPost(sort: { order: DESC, fields: publishedAt }) {
        edges {
          node {
            author
            title
            _rawExcerpt
            _rawBody
            _id
            publishedAt(formatString: "dddd — MMMM DD, yyyy")
            slug {
              current
            }
            figure {
              asset {
                fluid(maxWidth: 800) {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
                }
              }
            }
            categories {
              title
            }
          }
          previous {
            slug {
              current
            }
            title
            _rawExcerpt
          }
          next {
            slug {
              current
            }
            title
            _rawExcerpt
          }
        }
      }
    }
  `)

  return data.posts.edges
}

export default usePost
