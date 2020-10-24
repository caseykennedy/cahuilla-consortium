// useFaq hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type FaqShape = {
  faq: {
    edges: {
      node: {
        _rawAnswer: string
        question: string
      }
    }[]
  }
}

const useFaq = () => {
  const data = useStaticQuery<FaqShape>(graphql`
    query FaqQuery {
      faq: allSanityFaq {
        edges {
          node {
            _rawAnswer
            question
          }
        }
      }
    }
  `)

  return data.faq.edges
}

export default useFaq
