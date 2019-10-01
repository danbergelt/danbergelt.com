import React from "react"

import { DarkProvider } from "../context/context"

import Layout from "../components/layout/layout"
import AboutMe from "../components/about/aboutme"
import Services from "../components/about/services"
import FavTech from "../components/about/favtech"

export default () => {
  return (
    <DarkProvider>
      <Layout>
        <AboutMe />
        <Services />
        <FavTech />
      </Layout>
    </DarkProvider>
  )
}
