import React, { useState } from "react"

import { CheckCircle, Slash } from 'react-feather';

const Availability = () => {

  const [availability, setAvailability] = useState(true);

  return (
    <>
    {
      availability === true ? 
      <section className="availability">Available for contract work: <span className = "availability-status">Available {<CheckCircle className="availability-icon" size="2rem" />}</span></section>
      :
      <section className="availability">Available for contract work: <span className = "no-availability-status">Not Available {<Slash className="availability-icon" size="2rem" />}</span></section>
    }
    </>
  )
}

export default Availability
