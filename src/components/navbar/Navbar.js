import React from 'react'
import './Navbar.css'
import { useState } from 'react';

//Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';

//Custom Components
import { Login, Signup } from '../../components'

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
  const [loggedIn, setLoggedIn] = useState(true)
  const [users, setUsers] = useState([{ username: 'user', password: 'user' }])

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            LOGO
          </div>
          <div className="navbar-menu">
            <NavMenu />
            {/* Login and Logut Button */}
            <div className="login-button-container">
              {loggedIn ?
                <div className='profile-icon-container'>
                  <PersonIcon fontSize='large' />
                  <span onClick={() => setLoggedIn(false)}>Logout</span>
                </div> :
                <button className="login-button" onClick={() => setToggleLogin(true)}>Login</button>
              }
            </div>
          </div>

          {/* Mobile navmenu */}
          <div className="navbar-menu-toggle">
            {toggleMenu ? <CloseIcon fontSize="large" onClick={() => setToggleMenu(false)} /> : <MenuIcon fontSize='large' onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
              <div className="navbar-menu-container animate__animated animate__fadeInDown">
                <NavMenu />
                {/* Login and Logut Button */}
                <div className="mobile-login-button-container">
                  {loggedIn ?
                    <div className='mobile-profile-icon-container'>
                      <PersonIcon fontSize='large' />
                      <span onClick={() => setLoggedIn(false)}>Logout</span>
                    </div> :
                    <button className="mobile-login-button" onClick={() => setToggleLogin(true)}>Login</button>
                  }
                </div>
              </div>
            )}
          </div>
        </div>
        {toggleLogin && (
          <div className="navbar-login-container">
            {toggleSignupForm ? <Signup users={users} setUsers={setUsers} setToggleSignupForm={setToggleSignupForm} setToggleLogin={setToggleLogin} /> : <Login users={users} setLoggedIn={setLoggedIn} setToggleSignupForm={setToggleSignupForm} setToggleLogin={setToggleLogin} />}

          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar