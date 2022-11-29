// gatsby-browser

import React from 'react'
import Layout from './src/components/Layout'
import GlobalStyles from './src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './src/gatsby-plugin-theme-ui'

// ___________________________________________________________________

export const wrapPageElement = ({ element, props }) => (
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Layout {...props}>{element}</Layout>
  </ThemeProvider>
)

export const wrapRootElement = ({ element }) => element
