// usePolicies hook

// _____________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// _____________________________________________________________

const usePolicies = () => {
  const data = useStaticQuery<PolicyShape>(graphql`
    query PoliciesQuery {
      policies: allSanityPolicy(sort: { order: DESC, fields: publishedAt }) {
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
                gatsbyImageData(
                  fit: FILLMAX
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                  aspectRatio: 1
                )
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

  return data.policies.edges
}

export default usePolicies
