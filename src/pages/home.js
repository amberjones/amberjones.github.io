

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = () => (
  <section id="home" class="flex">
    <SEO title="Home" />
    <h1>Hello!</h1>
    <img id="profile-image" src="https://i.imgur.com/5g2rMWz.jpg?1"></img>
    <p>My name is Amber</p>
    <p>I am a Full Stack Software Engineer</p>
  </section>
)

export default Home
