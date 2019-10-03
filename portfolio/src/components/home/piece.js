import React from "react"

import { GitHub } from "react-feather"

const Piece = ({ name, desc, dark }) => {

  return (
    <div className={dark ? 'dark-piece' : 'piece'}>
      <div className="piece-content-container">
        <h3 className={dark ? 'dark-piece-title' : 'piece-title'}>{name}</h3>
        <p className={dark && 'dark-piece-desc'}>{desc}</p>
      </div>
      <div className="piece-buttons">
        <div className="piece-left-buttons">
          <a href="#" className={dark ? 'dark-piece-gh' : 'piece-gh'}>
            <GitHub size="24" />
          </a>
          <a href="#" className={dark ? 'dark-piece-site' : 'piece-site'}>
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
