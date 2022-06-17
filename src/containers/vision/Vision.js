import React from 'react'
import './Vision.css'
import { Heading } from '../../components'
import { useState } from 'react'

//Image
import VisionImage from './vision.svg'

function Vision() {
  const [animation, setAnimation] = useState(false)

  
  return (
    <div className={`vision-wrapper ${animation ? "gradient-animation":""}`} id='vision'>
      <div className="vision-heading-container">  <Heading title="Vision" subtitle="Our vision" />
      </div>
      <div className="vision-container section-margin">
        <div className={`vision-text body-text ${animation ? "gradient-text":""}`}>
          <h4>Lorem Ipsum is simply dummy text for printing</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button onClick={() => setAnimation(!animation)}>See the Magic👻</button>
        </div>
        <div className="vision-image">
          <img src={VisionImage} alt="vision"/>
        </div>
      </div>
    </div>
  )
}

export default Vision