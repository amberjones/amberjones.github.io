import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "./about"
import Portfolio from "./portfolio"
import Contact from "./contact"
import Home from "./home"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="height-fix">
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </section>
  </Layout>
)

export default IndexPage
