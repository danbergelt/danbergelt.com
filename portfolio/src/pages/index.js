import React from "react"

// components
import Layout from "../components/layout"
import Hero from "../components/hero"
import Availability from "../components/availability"
import Work from "../components/work"
import Contact from "../components/contact"

import "../styles/index.scss"

export default () => {
  return (
    <div className="container">
      <Layout>
        <Hero />
        <Availability />
        <Work />
        <Contact />
      </Layout>
    </div>
  )
}
