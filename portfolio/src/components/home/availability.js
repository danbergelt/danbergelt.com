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
          Available for contract work:{" "}
          <span
            className={
              dark ? "dark-availability-status" : "availability-status"
            }
          >
            Available{" "}
            {<CheckCircle className="availability-icon" size="2rem" />}
          </span>
        </section>
      ) : (
        <section className="availability">
          Available for contract work:{" "}
          <span className="no-availability-status">
            Not Available {<Slash className="availability-icon" size="2rem" />}
          </span>
        </section>
      )}
    </>
  )
}

export default Availability
