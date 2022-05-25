// useResource hook

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

const useResources = () => {
  const data = useStaticQuery<ResourceShape>(graphql`
    query ResourceQuery {
      resources: allSanityResource(sort: { order: DESC, fields: publishedAt }) {
        edges {
          node {
            asset {
              asset {
                description
                id
                title
                url
              }
            }
            isVideo
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

  return data.resources.edges
}

export default useResources
