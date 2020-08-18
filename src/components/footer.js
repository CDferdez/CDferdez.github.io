import React from 'react'
import PropTypes from 'prop-types'

const Footer = () => (
  <footer>
    <span className="footerInfo">
      Christian Fernandez
    </span>
    <span className="footerInfo">
      <a href="https://github.com/cdferdez">Github</a>
    </span>
    <span className="footerInfo">
      <a href="https://www.linkedin.com/in/christian-f-40056295/">LinkedIn</a>
    </span>
    <span className="footerInfo">
      <a href="https://www.instagram.com/christian.ferdez/">Instagram</a>
    </span>
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
