import React, { useContext } from "react"

import { DarkContext } from "../../context/context"

const Contact = () => {

  const [dark, setDark] = useContext(DarkContext)

  return (
    <>
      <section className={dark ? 'dark-contact' : 'contact'}>
        Want to get in touch?{" "}
        <a className={dark ? 'dark-contact-cta' : 'contact-cta'} href="mailto:danbergelt@protonmail.com">
          Let's talk.
        </a>
      </section>
    </>
  )
}

export default Contact
