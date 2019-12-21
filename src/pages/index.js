import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "./about"
import Portfolio from "./portfolio"
import Contact from "./contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="flex height-fix">
      <h1><a id="home"></a> Hello!</h1>
      <p>My name is Amber</p>
      <p>I create engaging and creative applications</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      </div>
      <About/>
      <Portfolio />
      <Contact />
    </section>
  </Layout>
)

export default IndexPage
