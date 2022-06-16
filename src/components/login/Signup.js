import React from 'react'
import './Login.css'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

//Material UI
import { TextField } from '@mui/material';


function Signup(props) {
    const { setToggleSignupForm, setToggleLogin } = props
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [passwordError, setPasswordError] = useState(false)

    //Close Button handler
    function closeButtonHandler() {
        setToggleSignupForm(false)
        setToggleLogin(false)
    }

    //Signup Button handler
    function signupButtonHandler() {
        console.log("signup njekki")
        if (password === confirmPassword) {
            setPasswordError(false)
            console.log('Signup Successful')
        } else {
            setPasswordError(true)
        }
    }

    return (
        <div className="login-container">
            <div className="login-container-header">
                <CloseIcon onClick={closeButtonHandler} fontSize='large' />
            </div>
            <div className="login-form-container">
                <h1>Signup</h1>
                <TextField required fullWidth id="standard-basic" margin='normal' label="Username" value={username} onChange={(e) => setUsername(e.target.value)} variant="standard" />
                <TextField required fullWidth type="password" id="standard-basic" margin='normal' label="Password" value={password} onChange={(e) => setPassword(e.target.value)} variant="standard" />
                <TextField required fullWidth type="password" id="standard-basic" margin='normal' label="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} error={passwordError ? true:false} helperText={passwordError && "Password must match."}  variant="standard" />
                <button onClick={signupButtonHandler}>Signup</button>
                <span onClick={() => setToggleSignupForm(false)}>Existing user? Login</span>
            </div>
        </div>
    )
}

export default Signup