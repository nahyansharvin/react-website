import React from 'react'
import './Login.css'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


//Custom component
import { TextInput } from '../../components'


function Signup(props) {
    const { users, setUsers, setToggleSignupForm, setToggleLogin } = props


    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [passwordError, setPasswordError] = useState(false)

    //Close Button handler
    function closeButtonHandler() {
        setToggleSignupForm(false)
        setToggleLogin(false)
    }

    //Set error in empty fields
    function errorSetter() {
        if (username === undefined) setUsername("")
        if (password === undefined) setPassword("")
        if (confirmPassword === undefined) setConfirmPassword("")
    }

    //Handle Signup Button click
    function signupButtonHandler() {
        if (username === undefined || password === undefined || confirmPassword === undefined || username === "" || password === "" || confirmPassword === "") {
            errorSetter()
            return
        } else if (password === confirmPassword) {
            //Add user to users array
            setUsers([...users, { username, password }])
            setToggleSignupForm(false)
            setUsername("")
            setPassword("")
            setConfirmPassword("")
            alert("Signup Successful, Login to continue.")
        } else setPasswordError(true)
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