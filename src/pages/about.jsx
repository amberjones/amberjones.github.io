import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <section id="about" class="flex">
    <SEO title="About" />
    <h2>About Me</h2>
    <div style={{display: "flex"}}>
      <div>
        <p>Watching my dad build computers as a kid instilled in me a love of tech and problem solving. 
          In college, Dad wanted me to pursue Computer Engineering, so of course I got an Fine Arts degree. 
          At the time, I didn't realize both were creative endeavors. </p>
        <p>Fast forward 10 years, I am a Full Stack Software Developer. I utilize my background in visual design and critical analysis 
          to engineer applications with meaninful user engagement. My interests range from helping people participate in 
          their hobbies more to addressing societal challenges. </p>
      </div>
    </div>
  </section>
)

export default About