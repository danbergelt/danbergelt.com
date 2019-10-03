import React from "react"

const Contact = ({ dark }) => {

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
