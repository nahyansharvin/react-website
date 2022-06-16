import React from 'react'
import './Login.css'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

//Material UI
import { TextField } from '@mui/material';


function Login(props) {
  const { setToggleSignupForm, setToggleLogin } = props

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  return (
    <div className="login-container">
      <div className="login-container-header">
        <CloseIcon onClick={() => setToggleLogin(false)} fontSize='large' />
      </div>
      <div className="login-form-container">
        <h1>Login</h1>
        <TextField required fullWidth id="standard-basic" margin='normal' label="Username" value={username} onChange={(e) => setUsername(e.target.value)} variant="standard" />
        <TextField required fullWidth type="password" id="standard-basic" margin='normal' label="Password" value={password} onClick={(e) => setPassword(e.target.value)} variant="standard" />
        <button>Login</button>
        <span onClick={() => setToggleSignupForm(true)}>New user? Signup</span>
      </div>
    </div>
  )
}

export default Login