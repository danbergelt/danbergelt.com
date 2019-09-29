import React from "react"

import { GitHub } from "react-feather"

const Piece = ({ name, desc, github, site }) => {
  return (
    <div className="piece">
      <div className="piece-content-container">
        <h3 className="piece-title">{name}</h3>
        <p className="piece-desc">{desc}</p>
      </div>
      <div className="piece-buttons">
        <div className="piece-left-buttons">
          <a href={github} className="piece-gh">
            <GitHub size="24" />
          </a>
          <a href={site} className="piece-site">
            Site
          </a>
        </div>
        <div className="piece-right-buttons">
          <a href="#" className="piece-learn">Learn</a>
        </div>
      </div>
    </div>
  )
}

export default Piece
