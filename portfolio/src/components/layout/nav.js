import React from "react"

import { Eye } from 'react-feather';

import { Link } from 'gatsby';


const Nav = () => {

  return (
    <header>
      <nav className="header-nav">
        <Link className="home-link" to='/'><h1 className="dan-icon">{`<Dan />`}</h1></Link>
        <div className = "header-nav-link-container">
          <Link to='/about' className="header-nav-link">About</Link>
          <Eye className="header-nav-link eye"/>
        </div>
      </nav>
    </header>
  )
}

export default Nav
