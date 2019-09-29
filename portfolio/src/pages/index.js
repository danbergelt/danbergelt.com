import React from "react"

// components
import Layout from "../components/layout/layout"
import Hero from "../components/home/hero"
import Availability from "../components/home/availability"
import Work from "../components/home/work"
import Contact from "../components/home/contact"

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
