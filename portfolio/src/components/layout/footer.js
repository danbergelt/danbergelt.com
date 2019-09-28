import React from "react"

const Footer = () => {
  return (
    <footer>
      <nav className="footer-nav">
        <div className="footer-icons">
          <a href="https://github.com/danbergelt" className="footer-nav-link">GitHub</a>
          <a href="https://www.linkedin.com/in/danbergelt/" className="footer-nav-link">LinkedIn</a>
        </div>
        <div>
          <a href="https://github.com/danbergelt/portfolio-site" id="site-source-link">Site source code</a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer