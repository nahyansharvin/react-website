import React from 'react'
import './Tech.css'
import {Heading} from '../../components'

function Tech() {
  return (
    <div className='tech-wrapper' id='tech'>
      <div className="tech-heading-container">
        <Heading title="Tech" subtitle="What we use" />
      </div>
      <div className="tech-container section-margin">
        <div className="tech-image">
          <img src={require('./tech.svg').default} alt="tech"/>
        </div>
        <div className="tech-text body-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
  )
}

export default Tech