import React, { useContext } from "react"

import { DarkContext } from "../../context/context"

const Contact = () => {
  const [dark] = useContext(DarkContext)

  return (
    <>
      <section className={dark ? "dark-contact" : "contact"}>
        <div>Want to get in touch?</div>
        <div className="contact-cta-wrapper">
          <a
            className={dark ? "dark-contact-cta" : "contact-cta"}
            href="mailto:dan@danbergelt.com"
          >
            Click me.
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact
