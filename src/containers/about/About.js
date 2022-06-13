import React from 'react'
import './About.css'
import About_us from './About_us.svg'
import {Heading} from '../../components'

function About() {
  return (
      <>
        <div className="about-wrapper" id='about'>
        <div className="about-heading-container">
            <Heading title="About Us" subtitle="Why choose us?" />
        </div>
        <div className="about-container">
            <div className="about-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="about-image">
                <img src={About_us} alt="about us"/>
            </div>
        </div>
        </div>
      </>
  )
}

export default About