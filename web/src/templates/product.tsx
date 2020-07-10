// Product template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import { useSpring, config } from 'react-spring'

// Elements
import { AnimatedBox, Box, Heading } from '../components/ui'
import Divider from '../components/ui/Divider'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const ProductTemplate: React.FC<ProductContextShape> = ({ pageContext }) => {
  const page = pageContext.page
  // console.log('—————|— implants —|—————')
  // console.log(page)
  return (
    <Layout>
      <SEO
        pathname={`/implants/${page.slug.current}`}
        title={`${page.name} | `}
        desc={`${page.name} | `}
        individual={false}
      />
      <AnimatedBox>
        Template
      </AnimatedBox>
    </Layout>
  )
}

export default ProductTemplate

// ___________________________________________________________________
