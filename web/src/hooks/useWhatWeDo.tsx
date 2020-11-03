// useWhatWeDo hook
// Hook for querying data

// ___________________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type Props = {
  whatWeDo: {
    edges: {
      node: {
        _rawBody: string
        _rawWeCanHelp: string
        billboard: {
          message: string
        }
        figure: {
          asset: {
            fluid: {
              srcWebp: string
              srcSetWebp: string
              srcSet: string
              src: string
              sizes: string
              base64: string
              aspectRatio: number
            }
          }
          alt: string
        }
        lead: string
        moreWaysWeCanHelp: {
          _rawBody: string
          emergencyHousing: string[]
          immediateSafety: string[]
          transitionalHousing: string[]
        }
        serviceArea: {
          _rawBody: string
          _rawNote: string
        }
        statement: string
        whatWeHelpWith: string[]
      }
    }[]
  }
}

const useWhatWeDo = () => {
  const data = useStaticQuery<Props>(graphql`
    query WhatWeDoQuery {
      whatWeDo: allSanityWhatWeDo {
        edges {
          node {
            _rawBody
            _rawWeCanHelp
            billboard {
              message
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
              alt
            }
            lead
            moreWaysWeCanHelp {
              _rawBody
              emergencyHousing
              immediateSafety
              transitionalHousing
            }
            serviceArea {
              _rawBody
              _rawNote
            }
            statement
            whatWeHelpWith
          }
        }
      }
    }
  `)

  return data.whatWeDo.edges[0].node
}

export default useWhatWeDo
