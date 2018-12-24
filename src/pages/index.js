import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`product`, `design`, `ux`]} />
    <h1>I’m a UX Designer with a penchant for data-driven design, web performance and design systems.</h1>
    
    <a href="mailto:alexcarbajo@gmail.com">Mail</a>
    <a href="https://www.linkedin.com/in/alexcarbajo">Linkedin</a>
    <a href="tel:0034630003359">Phone</a>
    
    <Image />
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
