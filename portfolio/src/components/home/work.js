import React, { useContext } from "react"

import { DarkContext } from "../../context/context"

import Piece from "./piece"

const Work = () => {

  const [dark, setDark] = useContext(DarkContext)

  return (
    <div className="work-spacer">
      <h1 className={dark ? 'dark-work-title' : 'work-title'}>Personal Projects</h1>
      <div className="piece-container">
        <Piece
          name="Spotter"
          desc="A no-frills PR tracker - for lifters, by a lifter."
        />
        <Piece
          name="Prophet"
          desc="A stock market algorithm you can wrap your head around."
        />
        <Piece name="Lambda Labs" desc="Lambda Labs project" />
      </div>
    </div>
  )
}

export default Work
