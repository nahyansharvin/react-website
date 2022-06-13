import React from 'react'
import './CtaButton.css'

function CtaButton({text}) {
  return (
    <div className="cta-button">
        <button>{text}</button>
    </div>
  )
}

export default CtaButton