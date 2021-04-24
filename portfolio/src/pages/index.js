import React from "react"
import { DarkProvider } from "../context/context"

// components
import Layout from "../components/layout/layout"
import Hero from "../components/home/hero"
import Availability from "../components/home/availability"
import Work from "../components/home/work"
import Contact from "../components/home/contact"
import Info from "../components/home/info"

import "../styles/index.scss"

export default () => {
  return (
    <DarkProvider>
      <Layout>
        <Hero />
        <Availability />
        {/* <Work />
        <Info /> */}
        <Contact />
      </Layout>
    </DarkProvider>
  )
}
