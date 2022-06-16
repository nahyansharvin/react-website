import React from 'react'
import './Login.css'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

//Material UI
// import { TextField } from '@mui/material';

//Custom component
import {TextInput} from '../../components'


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
                <TextInput label="Username" value={username} setValue={setUsername} />

                <TextInput type="password" label="Password" value={password} setValue={setPassword} />

                <TextInput type="password" label="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} error={passwordError} />

                <button onClick={signupButtonHandler}>Signup</button>
                <span onClick={() => setToggleSignupForm(false)}>Existing user? Login</span>
            </div>
        </div>
    )
}

export default Signup