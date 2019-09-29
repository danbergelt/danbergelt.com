import React from "react"

const FavTech = () => {
  return (
    <div className="about-container">
      <section id="fav-tech">
        <h1 className="about-header">My Favorite Tech</h1>
        <div id="tech-container">
          <p className="tech">Gatsby JS</p>
          <p className="tech">React/Redux</p>
          <p className="tech">Node/Express</p>
          <p className="tech">Spring/Hibernate</p>
        </div>
      </section>
    </div>
  )
}

export default FavTech
