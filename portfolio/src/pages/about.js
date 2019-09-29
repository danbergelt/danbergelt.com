import React from "react"

import Layout from "../components/layout/layout"
import AboutMe from "../components/about/aboutme"
import Services from "../components/about/services"
import FavTech from "../components/about/favtech"

export default () => {
  return (
    <div className="container">
      <Layout>
        <AboutMe />
        <Services />
        <FavTech />
      </Layout>
    </div>
  )
}
