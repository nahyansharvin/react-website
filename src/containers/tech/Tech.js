import React from 'react'
import './Tech.css'
import {Heading} from '../../components'

//Image
import TechImage from './tech_image.svg'

function Tech() {
  return (
    <div className='tech-wrapper' id='tech'>
      <div className="tech-heading-container">
        <Heading title="Tech" subtitle="What we use" />
      </div>
      <div className="tech-container section-margin">
        <div className="tech-image">
          <img src={TechImage} alt="tech"/>
        </div>
        <div className="tech-text body-text">
          <h4>Lorem Ipsum is simply dummy text for printing</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
  )
}

export default Tech