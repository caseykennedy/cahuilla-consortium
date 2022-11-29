// useFaq hook
// Hook for querying data

// _____________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// _____________________________________________________________

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
      faq: allSanityFaq(sort: {fields: question, order: DESC}) {
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
