import React from 'react'
import './Vision.css'
import { Heading } from '../../components'

function Vision() {
  return (
    <div className="vision-wrapper" id='vision'>
      <div className="vision-heading-container">  <Heading title="Vision" subtitle="Our vision" />
      </div>
      <div className="vision-container section-margin">
        <div className="vision-text body-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="vision-image">
          <img src={require('./vision.svg').default} alt="vision"/>
        </div>
      </div>
    </div>
  )
}

export default Vision