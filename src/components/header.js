import { Link, Image } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/ajIcon.svg"

const Header = ({ siteTitle }) => (
  <header id="header">
    <nav class="nav" style={{marginLeft: 30, marginRight: 30}}>
      <div class="nav_Links">
        <Link to="#about"> About</Link>
        <Link to="#portfolio"> Portfolio</Link>
        <Link to="#contact"> Contact </Link>
      </div>
    <div class="nav_Styledlogo" style={{marginTop: 10}}>
        <a href="https://dev.to/amberjones">
          <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="AmberJ's DEV Profile" height="40" width="40"></img>
        </a>
        <a href="https://www.linkedin.com/in/amber-m-jones/">
          <img src="https://i.imgur.com/1f0y9eu.png" alt="AmberJ's LinkedIn Profile" height="40" width="40"></img>
        </a>
        <a href="https://github.com/amberjones">
          <img src="https://i.imgur.com/2o38lKB.png" alt="AmberJ's Github Profile" height="40" width="40"></img>
        </a>
    </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
