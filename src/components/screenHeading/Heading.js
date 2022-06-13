import React from 'react'
import './Heading.css'

function Heading({title,subtitle}) {
  return (
      <>
        <div className="heading-wrapper">
            <div className="heading-text">
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <div className="heading-seperator">
                <div className="seperator-line"></div>
                <div className="seperator-blob">
                    <div className="seperator-blob-inner"></div>
                </div>
            </div>
        </div>
      </>
  )
}

export default Heading