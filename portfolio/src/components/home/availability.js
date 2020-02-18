import React, { useState, useContext } from "react"

import { DarkContext } from "../../context/context"

import { CheckCircle, Slash } from "react-feather"

const Availability = () => {
  const [availability] = useState(true)

  const [dark] = useContext(DarkContext)

  return (
    <>
      {availability === true ? (
        <section className={dark ? "dark-availability" : "availability"}>
          available for work:{" "}
          <span
            className={
              dark ? "dark-availability-status" : "availability-status"
            }
          >
            available {<CheckCircle className="availability-icon" />}
          </span>
        </section>
      ) : (
        <section className="availability">
          available for work:{" "}
          <span className="no-availability-status">
            unvailable {<Slash className="availability-icon" />}
          </span>
        </section>
      )}
    </>
  )
}

export default Availability
