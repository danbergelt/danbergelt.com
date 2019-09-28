import React from "react"

import { Eye } from 'react-feather';


const Nav = () => {

  return (
    <header>
      <nav className="header-nav">
        <h1 className="dan-icon">{`<Dan />`}</h1>
        <div className = "header-nav-link-container">
          <span className="header-nav-link">Work</span>
          <span className="header-nav-link">Contact</span>
          <span className="header-nav-link">Resume</span>
          <Eye className="header-nav-link eye"/>
        </div>
      </nav>
    </header>
  )
}

export default Nav
