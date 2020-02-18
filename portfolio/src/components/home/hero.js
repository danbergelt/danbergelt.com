import React, { useContext } from "react"
import { DarkContext } from "../../context/context"
import Wave from "./wave"

const Hero = () => {
  const [dark] = useContext(DarkContext)

  return (
    <>
      <section className={dark ? "dark-hero" : "hero"}>
        <Wave dark={dark} />
        <div>Hi, I'm Dan.</div>
        <br />
        <div>
          I'm a{" "}
          <span
            data-text="wavy"
            id={dark ? "dark-hero-highlight" : "hero-highlight"}
          >
            developer
          </span>{" "}
          based in NYC, and I build web apps.
        </div>
      </section>
    </>
  )
}

export default Hero
