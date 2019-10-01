import React, { useContext } from "react"

import { DarkContext } from "../../context/context"

const Hero = () => {
  const [dark, setDark] = useContext(DarkContext)

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
