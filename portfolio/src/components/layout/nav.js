import React from "react"

const Nav = () => {
  return (
    <header>
      <nav className="header-nav">
        <h1>{`<Dan />`}</h1>
        <div>
          <span className="header-nav-link">Resume</span>
          <span className="header-nav-link">Contact</span>
          <span className="header-nav-link">Dark Mode</span>
        </div>
      </nav>
    </header>
  )
}

export default Nav
