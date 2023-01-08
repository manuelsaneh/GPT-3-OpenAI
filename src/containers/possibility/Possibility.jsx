import React from 'react'
import possibilityImage from "../../assets/possibility.png"
import "./possibility.css"

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>
          Request Early Access to Get Started
        </h4>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo.
        </p>
        <h4>
          Request Early Access to Get Started
        </h4>
      </div>
    </div>
  )
}

export default Possibility