import React, { useContext } from "react"

import { Eye } from "react-feather"

import { Link } from "gatsby"

import { addDark, removeDark } from "../../utils/darkmode"

import { DarkContext } from "../../context/context"

const Nav = () => {
  const [dark, setDark] = useContext(DarkContext)

  const darkMode = () => {
    setDark(true)
    addDark()
  }

  const lightMode = () => {
    setDark(false)
    removeDark()
  }

  return (
    <header>
      <nav className="header-nav">
        <Link className="home-link" to="/">
          <h1 className={dark ? "dan-icon-dark" : "dan-icon"}>Dan</h1>
        </Link>
        <div className="header-nav-link-container">
          <Eye
            onClick={() => (dark ? lightMode() : darkMode())}
            className={
              dark ? "header-nav-link dark-eye" : "header-nav-link eye"
            }
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav
