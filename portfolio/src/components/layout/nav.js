import React, { useContext } from "react"

import Gear from "./gear"

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
        <div className="header-gear-container">
          <Gear
            spin={"header-gear"}
            color={!dark ? "333333" : "#afafb9"}
            size={"60px"}
          />
          <Gear
            spin={"header-gear-offset"}
            color={!dark ? "333333" : "#afafb9"}
            size={"50px"}
          />
        </div>
        <div className="header-nav-link-container">
          <Eye
            size={32}
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
