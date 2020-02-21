import React, { useContext } from "react"

import { DarkContext } from "../../context/context"

import Piece from "./piece"

import styles from "../../styles/variables.scss"

console.log(styles)

const Work = () => {
  const [dark] = useContext(DarkContext)

  return (
    <div className="work-spacer">
      <h1 className={dark ? "dark-work-title" : "work-title"}>projects</h1>
      <div className="piece-container">
        <Piece
          name="spotter"
          desc="a blazing fast, user obsessed, lifting focused fitness pal"
          dark={dark}
          urls={{
            gh: "https://github.com/danbergelt/spotter",
            website: "http://getspotter.io",
          }}
          colors={{
            light: styles.lightOne,
            dark: styles.darkOne,
            chev: styles.chev,
            darkChev: styles.darkChev,
          }}
          techs={[
            "react",
            "redux",
            "typescript",
            "mongodb",
            "node",
            "express",
            "docker",
          ]}
        />
        <Piece
          name="game of life"
          desc="conway's game of life, written with react hooks and immutable logic"
          dark={dark}
          urls={{
            gh: "https://github.com/danbergelt/arcade",
            website: "https://hopeful-fermi-522e5b.netlify.com/",
          }}
          colors={{
            light: styles.lightTwo,
            dark: styles.darkTwo,
            chev: styles.chev,
            darkChev: styles.darkChev,
          }}
          techs={[
            "react",
            "typescript",
            "eslint",
            "scss",
            "immer",
            "html5",
            "css3",
          ]}
        />
        <Piece
          name="party planner"
          desc="a full-stack party planner, built during a 4 day sprint with 2 other developers"
          dark={dark}
          urls={{
            gh: "https://github.com/build-week-party-planner",
            website: "https://elastic-jennings-52d92d.netlify.com/login",
          }}
          colors={{
            light: styles.three,
            dark: styles.three,
            chev: styles.chev,
            darkChev: styles.darkChev,
          }}
          techs={[
            "react",
            "redux",
            "node",
            "postgres",
            "express",
            "html5",
            "css3",
          ]}
        />
      </div>
    </div>
  )
}

export default Work
