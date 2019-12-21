import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import About from "./about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello!</h1>
    <p>My name is Amber</p>
    <p>I create engaging and creative applications</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <About/>
  </Layout>
)

export default IndexPage
