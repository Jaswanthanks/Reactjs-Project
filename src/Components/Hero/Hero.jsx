import React from 'react'

import arrow1 from "../../assets/white-arrow.png"
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to enpower students with the
          knowledge, Skills, and experience needed to excel in the dynamic feild
          of education</p>
        <button className="btn dark-btn">Explore More <img src={arrow1} alt="" /></button>  
        </div>
    </div>
  )
}

export default Hero