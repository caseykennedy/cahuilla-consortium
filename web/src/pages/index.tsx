// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

// Theme + Styles
import theme from '../../config/theme'

// UI
import { AnimatedBox } from '../components/ui'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import HomePage from '../components/HomePage'

// ___________________________________________________________________

const Index = () => {
  return (
    <Layout>
      <SEO />
      <AnimatedBox>
        <HomePage />
      </AnimatedBox>
    </Layout>
  )
}

export default Index
