import React, { useContext } from "react"

import { GitHub, ChevronUp } from "react-feather"

import { DarkContext } from "../../context/context"

const Piece = ({ name, desc, urls, colors }) => {
  const [dark] = useContext(DarkContext)

  return (
    <div className={dark ? "dark-piece" : "piece"}>
      <div className="piece-content-container">
        <div className="piece-head">
          <h3 className={dark ? "dark-piece-title" : "piece-title"}>{name}</h3>
          <div className="piece-tech-container">
            <p
              style={{
                borderBottom: `2px solid ${dark ? colors.dark : colors.light}`,
              }}
              className={dark ? "dark-piece-tech" : "piece-tech"}
            >
              tech
            </p>
            <ChevronUp color={dark ? colors.darkChev : colors.chev} size={15} />
          </div>
        </div>
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
