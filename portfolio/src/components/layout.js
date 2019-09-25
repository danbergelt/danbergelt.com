import React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <nav>Header Goes Here</nav>
      <main>{children}</main>
      <footer>Footer Goes Here</footer>
    </>
  )
}

export default Layout