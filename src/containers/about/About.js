import React from 'react'
import './About.css'

//Image
import About_us from './About_us.svg'

//Custom Component
import {Heading} from '../../components'

function About() {
  return (
      
        <div className="about-wrapper" id='about'>
            <div className="about-heading-container">
                <Heading title="About Us" subtitle="Why choose us?" />
            </div>
            <div className="about-container section-margin">
                <div className="about-text body-text">
                    <h4>Lorem ipsum dolor sit amet</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className="about-image">
                    <img src={About_us} alt="about us"/>
                </div>
            </div>
        </div>
      
  )
}

export default About