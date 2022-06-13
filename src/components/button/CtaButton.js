import React from 'react'
import './CtaButton.css'

function CtaButton({text,styleName}) {
  return (
    <div className='cta-btn'>
        <button>{text}</button>
    </div>
  )
}

export default CtaButton