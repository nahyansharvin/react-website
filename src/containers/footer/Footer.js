import React from 'react'
import './Footer.css'

//Custom Component
import {SocialMedia} from '../../components'

function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className='footer-socialmedia'>
          <SocialMedia />
        </div>
        <div className='footer-text'>
            <p>© 2022 Nahyan Sharvin</p>
        </div>
    </div>
  )
}

export default Footer