import React from "react"

import Nav from './layout/nav';
import Footer from './layout/footer';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout