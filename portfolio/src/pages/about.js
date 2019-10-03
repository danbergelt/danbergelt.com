import React, { useContext } from "react"
import { DarkContext } from '../context/context'
import { DarkProvider } from "../context/context"

import Layout from "../components/layout/layout"
import AboutMe from "../components/about/aboutme"
import Services from "../components/about/services"
import FavTech from "../components/about/favtech"

export default () => {

  const [dark] = useContext(DarkContext)

  return (
    <DarkProvider>
      <Layout dark={dark} >
        <AboutMe dark={dark} />
        <Services dark={dark} />
        <FavTech dark={dark} />
      </Layout>
    </DarkProvider>
  )
}
