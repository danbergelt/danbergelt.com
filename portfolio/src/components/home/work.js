import React, { useContext } from "react"

import { DarkContext } from "../../context/context"

import Piece from "./piece"

const Work = () => {
  const [dark] = useContext(DarkContext)

  return (
    <div className="work-spacer">
      <h1 className={dark ? "dark-work-title" : "work-title"}>Projects</h1>
      <div className="piece-container">
        <Piece
          name="Spotter"
          desc="A minimalist, user-first fitness pal. No bloat, no confusion, just PRs."
          dark={dark}
          urls={{
            gh: "https://github.com/danbergelt/spotter",
            website: "http://getspotter.io",
          }}
        />
        {/* <Piece
          name="Prophet"
          desc="A stock market algorithm you can wrap your head around."
          urls={{
            gh: "https://github.com/danbergelt/spotter",
            website: "http://getspotter.io",
          }}
          dark={dark}
        />
        <Piece
          name="Lambda Labs"
          desc="Lambda Labs project"
          dark={dark}
          urls={{
            gh: "https://github.com/danbergelt/spotter",
            website: "http://getspotter.io",
          }}
        /> */}
      </div>
    </div>
  )
}

export default Work
