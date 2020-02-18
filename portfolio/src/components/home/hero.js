import React, { useContext } from "react"
import { DarkContext } from "../../context/context"

const Hero = () => {
  const [dark] = useContext(DarkContext)

  return (
    <>
      <section className={dark ? "dark-hero" : "hero"}>
        <div>Hi, I'm Dan.</div>
        <br />
        <div>
          I'm a{" "}
          <span id={dark ? "dark-hero-highlight" : "hero-highlight"}>
            developer <div className={dark ? "dark-wavy" : "wavy"}></div>
          </span>{" "}
          based in NYC, and I build web apps.
        </div>
      </section>
    </>
  )
}

export default Hero
