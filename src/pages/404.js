import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="o-Hero">
      <h1>NOT FOUND</h1>
      <h2>You just hit a route that doesn't exist... the sadness.</h2>
    </div>
  </Layout>
)

export default NotFoundPage
