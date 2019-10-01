import React, { useContext } from "react";

import { DarkContext } from "../../context/context";

const FavTech = () => {

  const [dark, setDark] = useContext(DarkContext)

  return (
    <div className="about-container">
      <section id="fav-tech">
        <h1 className={dark ? 'dark-about-header' : 'about-header'}>My Favorite Tech</h1>
        <div id="tech-container">
          <p className={dark ? 'dark-tech' : 'tech'}>GatsbyJS</p>
          <p className={dark ? 'dark-tech' : 'tech'}>React/Redux</p>
          <p className={dark ? 'dark-tech' : 'tech'}>Node/Express</p>
          <p className={dark ? 'dark-tech' : 'tech'}>Spring</p>
          <p className={dark ? 'dark-tech' : 'tech'}>Sass</p>
          <p className={dark ? 'dark-tech' : 'tech'}>Contentful</p>
        </div>
      </section>
    </div>
  )
}

export default FavTech
