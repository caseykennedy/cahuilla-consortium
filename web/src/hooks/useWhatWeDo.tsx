// useWhatWeDo hook
// Hook for querying data

// _____________________________________________________________

import { graphql, useStaticQuery } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

// _____________________________________________________________

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
            gatsbyImageData: IGatsbyImageData
            url: string
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
                gatsbyImageData(
                  fit: FILLMAX
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, AVIF, WEBP]
                )
                url
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
