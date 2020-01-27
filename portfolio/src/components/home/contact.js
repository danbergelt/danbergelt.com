import React, { useContext } from "react"

import { DarkContext } from "../../context/context"

const Contact = () => {
  const [dark] = useContext(DarkContext)

  return (
    <>
      <section className={dark ? "dark-contact" : "contact"}>
        Want to get in touch?{" "}
        <a
          className={dark ? "dark-contact-cta" : "contact-cta"}
          href="mailto:dan@danbergelt.com"
        >
          Say hi.
        </a>
      </section>
    </>
  )
}

export default Contact
