import React, { useContext } from "react"

import { DarkContext } from "../../context/context"

import Piece from "./piece"

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
        />
        <Piece
          name="party planner"
          desc="a full-stack party planner, built during a 4 day sprint with 2 other developers"
          dark={dark}
          urls={{
            gh: "https://github.com/build-week-party-planner",
            website: "https://elastic-jennings-52d92d.netlify.com/login",
          }}
        />
      </div>
    </div>
  )
}

export default Work
