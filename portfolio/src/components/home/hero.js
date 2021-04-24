import React, { useContext } from "react"
import { DarkContext } from "../../context/context"
import Wave from "./wave"

const Hero = () => {
  const [dark] = useContext(DarkContext)

  return (
    <>
      <section className={dark ? "dark-hero" : "hero"}>
        <Wave dark={dark} />
        <div>hi, i'm dan</div>
        <br />
        <div>
          i'm a{" "}
          <span
            data-text="wavy"
            id={dark ? "dark-hero-highlight" : "hero-highlight"}
          >
            software engineer
          </span>{" "}
          based in nyc, currently employed at bloomberg
        </div>
      </section>
    </>
  )
}

export default Hero
