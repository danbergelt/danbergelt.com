import React, { useContext } from "react";

import { DarkContext } from "../../context/context";

const Services = () => {

  const [dark] = useContext(DarkContext)

  return (
    <div className="about-container">
      <section id="services">
        <h1 className={dark ? 'dark-about-header' : 'about-header'}>Services</h1>
        <h3 className={dark && 'dark-services-subhead'}>Web Development</h3>
        <p className={dark && 'dark-services-content'}>
          Why do I enjoy writing code? It allows me to build a totally customized
          product from the ground-up, using a wide array of tools and
          technologies. The only limit in web development is your imagination.
          Don't settle for average - tell me what you want, and I'll make it
          happen.
        </p>
        <h3 className={dark && 'dark-services-subhead'}>Hosting</h3>
        <p className={dark && 'dark-services-content'}>
          A website is nothing without a home, and I offer hosting solutions for
          all of my clients. And since you own all of the code I produce, if you
          ever want to migrate elsewhere, I make it easy.
        </p>
        <h3 className={dark && 'dark-services-subhead'}>Web Design</h3>
        <p className={dark && 'dark-services-content'}>
          Your website needs to be functional, but it also needs to be
          beautiful. Templated solutions are just that - templated - and your
          customers are savvy enough to recognize a pre-built website. I will
          work alongside you to create an elegant, subtle, fully bespoke website/web app that you
          will be proud to show your friends and family.
        </p>
      </section>
    </div>
  )
}

export default Services
