import React, { useContext } from "react"
import { DarkContext } from "../../context/context"

const Info = () => {
  const [dark] = useContext(DarkContext)

  return (
    <>
      <section className="info-container">
        <h1 className={dark ? "dark-info" : "info"}>about</h1>
        <p className={dark ? "dark-info-content" : "info-content"}>
          i'm a 24 year old software engineer with a special interest in
          statically typed, functional programming languages. i enjoy building
          stable, scalable, and flexible web applications for regular people
          <br />
          <br /> after graduating from new york university in 2017, i spent
          approx. two years working in accounts at{" "}
          <a
            className={dark ? "dark-work-link" : "work-link"}
            href="https://ignitehospitality.com"
          >
            ignite hospitality
          </a>
          , directing agile teams of developers, designers, and creatives to
          build campaigns and websites for a deep pool of clients. here is where
          i fell in love with programming, and left in may 2019 to pursue it
          full time
        </p>
      </section>
      <article className="info-container">
        <h1 className={dark ? "dark-info" : "info"}>skills</h1>
        <section className={dark ? "dark-info-content" : "info-content"}>
          <h2 className={dark ? "dark-skills" : "skills"}>front end</h2>
          <p>
            react, redux, html5, scss, css in js, jest, react testing library
          </p>
          <h2 className={dark ? "dark-skills" : "skills"}>back end</h2>
          <p>node, sqlite, mongodb, redis, firebase, postgres, mocha, chai</p>
          <h2 className={dark ? "dark-skills" : "skills"}>
            tools, languages, etc.
          </h2>
          <p>
            es6, eslint, babel, webpack, graphql, next.js, typescript, python,
            docker/containerization, ci/cd, git
          </p>
        </section>
      </article>
    </>
  )
}

export default Info
