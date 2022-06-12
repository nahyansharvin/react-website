import React from 'react'
import './Navbar.css'

const NavMenu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#about'>About</a></p>
  <p><a href='#tech'>Tech</a></p>
  <p><a href='#vision'>Vision</a></p>
  <p><a href='#contact'>Contact</a></p>
  </>
)

function Navbar() {
  return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              LOGO
            </div> 
            <div className="navbar-menu">
              <NavMenu/>
            </div>
          </div>
        </nav>
      </>
  )
}

export default Navbar