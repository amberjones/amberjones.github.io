import { Link, Image } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/ajIcon.svg"

const Header = ({ siteTitle }) => (
  <header style={{
    margin: `auto`,
    maxWidth: 960,
    padding: `50px`,
    textAlign: `center`,
  }}
  >
    <nav class="nav">
      <div class="nav_Styledlogo">
        <img src={logo} alt="Logo" style={{ width: 50, height: 50 }}></img>
      </div>
      <div class="nav_Links">
      <Link to="#about"> About</Link>
      <Link to="#portfolio"> Portfolio</Link>
      <Link to="#contact"> Contact </Link>
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
