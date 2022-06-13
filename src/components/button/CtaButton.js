import React from 'react'
import './CtaButton.css'

function CtaButton({text,target}) {
  return (
    <div className='cta-btn'>
        <a href={target}>{text}</a>
    </div>
  )
}

export default CtaButton