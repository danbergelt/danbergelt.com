import React from "react"

const Hero = ({ dark }) => {

  return (
    <>
      <section className={dark ? "dark-hero" : "hero"}>
        Hi, I'm Dan. I'm a NYC-based{" "}
        <span id={dark ? "dark-hero-highlight" : "hero-highlight"}>
          developer,
        </span>{" "}
        and I build web apps.
      </section>
    </>
  )
}

export default Hero
