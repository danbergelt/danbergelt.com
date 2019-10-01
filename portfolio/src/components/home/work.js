import React from "react"

import Piece from "./piece"

const Work = () => {
  return (
    <div className="work-spacer">
      <h1 className="work-title">Personal Projects</h1>
      <div className="piece-container">
        <Piece name="RPE" desc="A no-frills PR tracker - for lifters, by a lifter." />
        <Piece name="Prophet" desc="A stock market algorithm you can wrap your head around."/>
        <Piece name="Lambda Labs" desc="Lambda Labs project"/>
      </div>
    </div>
  )
}

export default Work
