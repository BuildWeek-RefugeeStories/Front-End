import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';

const Login = (props) => {

    const [loggedIn, setLoggedIn] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {
        setLoggedIn({...loggedIn, [e.target.name]: e.target.value})
        console.log('Login input value...', loggedIn)
    }

    const validUser = input => {
        axiosWithAuth()
        .post("auth/login", input)
        .then(res => {
        localStorage.setItem("token", res.data.token)
        props.history.push('/home')
        })
        .catch(err => console.log(err))
    }

    const onSubmit = e => {
        e.preventDefault();
        validUser({...loggedIn});
    }

    

    return (
        <div className='Login'>
            <h1>Administrator Login</h1>
            <p>Please enter your email and password</p>
            <form onSubmit={onSubmit} className='login-form'>
                <input
                onChange={handleChange} 
                type='email' 
                name='email' 
                placeholder='Email'>
                </input>
                <input
                onChange={handleChange} 
                type='password'
                name='password' 
                placeholder='Password'>
                </input>
                <button>Login</button>
            </form> {/* login-form end */}

            <div id='register'>
                <Link to='/register'>Not Registered?</Link>
            </div>

        </div> /* Login end */
    )
}

export default Login;