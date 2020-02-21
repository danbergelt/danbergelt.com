import React, { useContext, useState } from "react"

import { GitHub, ChevronUp } from "react-feather"

import { DarkContext } from "../../context/context"

import "animate.css"

const Piece = ({ name, desc, urls, colors, techs }) => {
  const [dark] = useContext(DarkContext)

  const [tech, setTech] = useState(null)

  const animate = (on, off) => {
    if (tech === true) {
      return on
    }

    if (typeof tech === "boolean" && tech === false) {
      return off
    }
  }

  return (
    <div className={dark ? "dark-piece-parent" : "piece-parent"}>
      {tech !== null && (
        <div
          className={
            !dark
              ? animate(
                  "animated slideInUp fast tech",
                  "animated slideOutDown fast tech"
                )
              : animate(
                  "animated slideInUp fast dark-tech",
                  "animated slideOutDown fast dark-tech"
                )
          }
        >
          <div
            style={{ animation: `ticker ${techs.length}s linear infinite` }}
            className="ticker"
          >
            <div style={{ display: "flex" }}>
              {techs.map((t, i) => (
                <p className="tech-individual" key={i}>
                  {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className={dark ? "dark-piece" : "piece"}>
        <div className="piece-content-container">
          <div className="piece-head">
            <h3 className={dark ? "dark-piece-title" : "piece-title"}>
              {name}
            </h3>
            <div
              onClick={() => setTech(tech === null ? true : !tech)}
              className={"piece-tech-container"}
            >
              <p
                style={{
                  borderBottom: `2px solid ${
                    dark ? colors.dark : colors.light
                  }`,
                }}
                className={dark ? "dark-piece-tech" : "piece-tech"}
              >
                tech
              </p>
              <ChevronUp
                className={animate("open-tech", "close-tech")}
                color={dark ? colors.darkChev : colors.chev}
                size={15}
              />
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
    </div>
  )
}

export default Piece
