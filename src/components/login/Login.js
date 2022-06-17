import React from 'react'
import './Login.css'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

//Material UI
import {TextInput} from '../../components'


function Login(props) {
  const { setToggleSignupForm, setToggleLogin } = props

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  return (
    <div className="login-container animate__animated animate__zoomIn">
      <div className="login-container-header">
        <CloseIcon onClick={() => setToggleLogin(false)} fontSize='large' />
      </div>
      <div className="login-form-container">
        <h1>Login</h1>
        <TextInput label="Username" value={username} setValue={setUsername} />
        <TextInput type="password" label="Password" value={password} setValue={setPassword} />
        <button>Login</button>
        <span onClick={() => setToggleSignupForm(true)}>New user? Signup</span>
      </div>
    </div>
  )
}

export default Login