import React from "react"

import Piece from "./work/piece"

const Work = () => {
  return (
    <div className="work-spacer">
      <h1 className="work-title">Projects</h1>
      <div className="piece-container">
        <Piece name="PRTrackr.io" desc="A no-frills PR tracker - for lifters, by a lifter." />
        <Piece name="Prophet" desc="A stock market algorithm you can wrap your head around."/>
        <Piece name="Lambda Labs" desc="Lambda Labs project"/>
        <Piece name="Project TBD" desc="Undiscovered personal project"/>
      </div>
    </div>
  )
}

export default Work
