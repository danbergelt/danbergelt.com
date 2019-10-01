import React, { useContext } from "react"

import { GitHub } from "react-feather"

import { DarkContext } from "../../context/context"

const Piece = ({ name, desc, github, site }) => {

  const [dark, setDark] = useContext(DarkContext)

  return (
    <div className={dark ? 'dark-piece' : 'piece'}>
      <div className="piece-content-container">
        <h3 className={dark ? 'dark-piece-title' : 'piece-title'}>{name}</h3>
        <p className={dark && 'dark-piece-desc'}>{desc}</p>
      </div>
      <div className="piece-buttons">
        <div className="piece-left-buttons">
          <a href={github} className={dark ? 'dark-piece-gh' : 'piece-gh'}>
            <GitHub size="24" />
          </a>
          <a href={site} className={dark ? 'dark-piece-site' : 'piece-site'}>
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
