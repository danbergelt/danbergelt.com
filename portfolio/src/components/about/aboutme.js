import React from "react";

const AboutMe = ({ dark }) => {

  return (
    <div className="about-container">
      <section id="aboutme">
        <h1 className={dark ? 'dark-about-header' : 'about-header'}>About Me</h1>
        <p className={dark && 'dark-about-text'}>
          I love writing code, and I love solving problems. With a passion for
          creating lightweight, scalable, and contemporary web applications, I'm
          your go-to developer for whatever digital bottlenecks are in your way.
        </p>

        <p className={dark && 'dark-about-text'}>
          A small biz website with CMS integration for easy access + updating?
          No problem. An e-commerce solution that will beat out your templated
          Shopify competition? Got it. What about bespoke web apps? I'm on it.
          The web is constantly evolving; let this passionate developer guide
          you through your digital journey.
        </p>
        <p className={dark && 'dark-about-text'}>
          Want to learn more? <a href="mailto: danbergelt@protonmail.com" id={dark ? 'dark-contact-link-about' : 'contact-link-about'}>Contact me here</a> - I look forward to hearing from
          you.
        </p>
      </section>
    </div>
  )
}

export default AboutMe
