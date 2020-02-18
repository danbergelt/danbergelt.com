import React, { useContext } from "react"

import { useWindowSize } from "react-use"

import Gear from "./gear"

import Light from "./light"

import { addDark, removeDark } from "../../utils/darkmode"

import { DarkContext } from "../../context/context"

const Nav = () => {
  const { width } = useWindowSize()

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
            color={!dark ? "#333333" : "#afafb9"}
            size={width >= 750 ? "60px" : "50px"}
          />
          <Gear
            spin={"header-gear-offset"}
            color={!dark ? "#333333" : "#afafb9"}
            size={width >= 750 ? "50px" : "40px"}
          />
        </div>
        <div className="header-nav-link-container">
          <Light
            dark={dark}
            lightMode={() => lightMode()}
            darkMode={() => darkMode()}
            size={width >= 750 ? "55px" : "45px"}
            color={!dark ? "#333333" : "#afafb9"}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav
