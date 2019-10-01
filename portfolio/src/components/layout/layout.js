import React, { useContext } from "react"

import Helmet from "react-helmet"
import favicon from "../../../assets/favicon.ico"

import Nav from "./nav"
import Footer from "./footer"

import { DarkContext } from "../../context/context"

const Layout = ({ children }) => {

  const [dark] = useContext(DarkContext)

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <div className={dark ? "master" : null}>
        <div className="container">
          <Nav />
          <>{children}</>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
