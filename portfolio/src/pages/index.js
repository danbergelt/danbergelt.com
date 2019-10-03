import React, { useContext } from "react"
import { DarkContext } from '../context/context'
import { DarkProvider } from "../context/context"

// components
import Layout from "../components/layout/layout"
import Hero from "../components/home/hero"
import Availability from "../components/home/availability"
import Work from "../components/home/work"
import Contact from "../components/home/contact"

import "../styles/index.scss"

export default () => {

  const [dark] = useContext(DarkContext)

  return (
    <DarkProvider>
      <Layout>
        <Hero dark={dark} />
        <Availability dark={dark} />
        <Work dark={dark} />
        <Contact dark={dark} />
      </Layout>
    </DarkProvider>
  )
}
