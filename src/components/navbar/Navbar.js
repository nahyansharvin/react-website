import React from 'react'
import './Navbar.css'
import { useState } from 'react';

//Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

//Custom Components
import {Login,Signup} from '../../components'

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

  //Login and Signup
  const [toggleLogin, setToggleLogin] = useState(false)
  const [toggleSignupForm, setToggleSignupForm] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [users, setUsers] = useState([{username: 'user', password: 'user'}])

  return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-logo">
              LOGO
            </div> 
            <div className="navbar-menu">
              <NavMenu/>
              <div className="login-button-container">
                <button className="login-button" onClick={() => setToggleLogin(true)}>Login</button>
              </div>
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
          {toggleLogin &&(
            <div className="navbar-login-container">
            {toggleSignupForm ? <Signup users={users} setUsers={setUsers} setToggleSignupForm={setToggleSignupForm} setToggleLogin={setToggleLogin} /> : <Login users={users} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setToggleSignupForm={setToggleSignupForm} setToggleLogin={setToggleLogin} />}
            
          </div>
          )}
        </nav>
      </>
  )
}

export default Navbar