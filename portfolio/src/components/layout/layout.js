import React, { useContext } from "react"

import Helmet from "react-helmet"
import favicon from "../../../static/favicon.ico"

import { DarkContext } from "../../context/context"

import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [dark] = useContext(DarkContext)

  return (
    dark !== undefined && (
      <>
        <Helmet title={`Dan Bergelt`}>
          <meta
            name="description"
            content="Dan Bergelt, Software Developer in New York City."
          />
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
  )
}

export default Layout
