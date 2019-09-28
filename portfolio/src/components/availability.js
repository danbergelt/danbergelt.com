import React from "react"

import { CheckCircle } from 'react-feather';

const Availability = () => {
  return (
    <>
      <section className="availability">Available for contract work: <span className = "availability-status">Available {<CheckCircle className="availability-icon" />}</span></section>
    </>
  )
}

export default Availability
