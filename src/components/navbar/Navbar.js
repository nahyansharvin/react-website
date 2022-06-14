import React from 'react'
import './Navbar.css'
import { useState } from 'react';

//Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
  const [toggleMenu, setToggleMenu] = useState(false)

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
            <div className="navbar-menu-toggle">
            {toggleMenu ? <CloseIcon fontSize="large" onClick={() => setToggleMenu(false)}/> : <MenuIcon fontSize='large' onClick={() => setToggleMenu(true)}/>}
            {toggleMenu &&(
              <div className="navbar-menu-container animate__animated animate__fadeInDown">
                <NavMenu/>
              </div>
            )}
          </div>
          </div>
        </nav>
      </>
  )
}

export default Navbar