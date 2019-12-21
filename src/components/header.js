import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `20px`,
      }}
    >
      <div id="header-links">
        <Link to="#/"> home </Link>
        <Link to="#about"> about me </Link>
        <Link to="#portfolio"> portfolio </Link>
        <Link to="#contact"> contact </Link>
      </div>
    </div>
  </header>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
