import React from 'react'
import './Login.css'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

//Custom Component
import {TextInput} from '../../components'


function Login(props) {
  const { users,setLoggedIn,setToggleSignupForm, setToggleLogin } = props

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  //To set error in empty fields
  function errorSetter() {
    if (username === undefined) setUsername("")
    if (password === undefined) setPassword("")
  }

  //To validate login credentials
  function validateLogin() {
    //Check if fields are empty
    if (username === undefined || password === undefined || username === "" || password === "") {
      errorSetter()
      return
    } else {
      //Check if username and password match
      let user = users.find(user => user.username === username && user.password === password)
      if (user) {
        setLoggedIn(true)
        setToggleLogin(false)
        alert("Login Successful")
      } else alert("Invalid username or password")
    }
  }

  return (
    <div className="login-container animate__animated animate__zoomIn">
      <div className="login-container-header">
        <CloseIcon onClick={() => setToggleLogin(false)} fontSize='large' />
      </div>
      <div className="login-form-container">
        <h1>Login</h1>
        <TextInput label="Username" value={username} setValue={setUsername} />
        <TextInput type="password" label="Password" value={password} setValue={setPassword} />
        <button onClick={validateLogin}>Login</button>
        <span onClick={() => setToggleSignupForm(true)}>New user? Signup</span>
      </div>
    </div>
  )
}

export default Login