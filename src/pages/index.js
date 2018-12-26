import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Alex Carbajo | Product Designer" keywords={[`product`, `design`, `ux`]}/>
    <Hero />
    
    {/* <a href="mailto:alexcarbajo@gmail.com">Mail</a>
    <a href="https://www.linkedin.com/in/alexcarbajo">Linkedin</a>
    <a href="https://www.medium.com/@alexcarbajo">Medium</a>
    <a href="tel:0034630003359">Phone</a> */}
  </Layout>
)

export default IndexPage
