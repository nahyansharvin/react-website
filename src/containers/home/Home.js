import React from 'react'
import './Home.css'
import Hero from './hero_image.svg'
import {CtaButton} from '../../components'

function Home() {
  return (
      <>
          <div className="hero-container">
            <div className='hero-image'>
                <img src={Hero} alt="hero" />
            </div>
            <div className='hero-text'>
                <h1>Welcome to the </h1><h1>Home Page</h1>
                <p>This is the home page of the application</p>
                <CtaButton text="Know More" />
            </div>
          </div>
      </>
  )
}

export default Home