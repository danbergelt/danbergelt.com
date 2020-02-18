import React, { useContext } from "react"

import { GitHub } from "react-feather"

import { DarkContext } from "../../context/context"

const Piece = ({ name, desc, urls }) => {
  const [dark] = useContext(DarkContext)

  return (
    <div className={dark ? "dark-piece" : "piece"}>
      <div className="piece-content-container">
        <h3 className={dark ? "dark-piece-title" : "piece-title"}>{name}</h3>
        <p className={dark ? "dark-piece-desc" : null}>{desc}</p>
      </div>
      <div className="piece-buttons">
        <div className="piece-left-buttons">
          <a href={urls.gh} className={dark ? "dark-piece-gh" : "piece-gh"}>
            <GitHub size="30" strokeWidth={1.25} />
          </a>
        </div>
        <div className="piece-right-buttons">
          <a href={urls.website} className="piece-learn">
            website
          </a>
        </div>
      </div>
    </div>
  )
}

export default Piece
