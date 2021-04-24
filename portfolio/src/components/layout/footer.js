import React, { useContext } from "react"

import { DarkContext } from "../../context/context"

const Footer = () => {
  const [dark] = useContext(DarkContext)

  return (
    <footer>
      <nav className="footer-nav">
        <div className="footer-icons">
          <a
            href="https://github.com/danbergelt"
            className={dark ? "dark-footer-nav-link" : "footer-nav-link"}
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/danbergelt/"
            className={dark ? "dark-footer-nav-link" : "footer-nav-link"}
          >
            linkedin
          </a>
          <a 
            href="mailto:dan@danbergelt.com"
            className={dark ? "dark-footer-nav-link" : "footer-nav-link"}
          >
            email
          </a>
        </div>
        <div>
          <a
            href="https://github.com/danbergelt/portfolio-site"
            id={dark ? "dark-site-source-link" : "site-source-link"}
          >
            source code
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
