import React from "react"

import Piece from "./piece"

const Work = ({ dark }) => {
  return (
    <div className="work-spacer">
      <h1 className={dark ? "dark-work-title" : "work-title"}>
        Personal Projects
      </h1>
      <div className="piece-container">
        <Piece
          name="Spotter"
          desc="A no-frills PR tracker - for lifters, by a lifter."
          dark={dark}
        />
        <Piece
          name="Prophet"
          desc="A stock market algorithm you can wrap your head around."
          dark={dark}
        />
        <Piece
          name="Lambda Labs"
          desc="Lambda Labs project"
          dark={dark}
        />
      </div>
    </div>
  )
}

export default Work
