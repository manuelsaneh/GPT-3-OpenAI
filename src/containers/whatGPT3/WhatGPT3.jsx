import React from 'react'
import { Feature } from '../../components'
import "./whatGPT3.css"

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature 
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris. Diam vulputate ut pharetra sit. Nam at lectus urna duis convallis convallis tellus."
        />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Explore The Library
        </p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature 
          title="Chatbots"
          text="Lectus quam id leo in vitae turpis. Rhoncus urna neque viverra justo."
        />
        <Feature 
          title="Knowledgebase"
          text="Nam at lectus urna duis convallis convallis tellus. Lectus quam id leo in vitae turpis. Rhoncus urna neque viverra justo."
        />
        <Feature 
          title="Education"
          text="Rutrum quisque non tellus orci ac auctor augue mauris augue. Ornare suspendisse sed nisi lacus sed viverra tellus in."
        />
      </div>
    </div>
  )
}

export default WhatGPT3