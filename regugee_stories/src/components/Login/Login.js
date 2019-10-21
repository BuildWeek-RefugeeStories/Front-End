import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = (props) => {

    const [loggedIn, setLoggedIn] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {
        setLoggedIn({...loggedIn, [e.target.name]: e.target.value})
        console.log('Login input value...', loggedIn)
    }

    

    return (
        <div className='Login'>
            <h1>Administrator Login</h1>
            <p>Please enter your email and password</p>
            <form className='login-form'>
                <input
                onChange={handleChange} 
                type='email' 
                name='email' 
                placeholder='Email'>
                </input>
                <div className='Eye'>
                
                <input
                onChange={handleChange} 
                type='password'
                name='password' 
                placeholder='Password'>
                </input>
                </div> {/* Eye end */}
                <button>Login</button>
            </form> {/* login-form end */}

            <div id='register'>
                <Link to='/register'>Not Registered?</Link>
            </div>

        </div> /* Login end */
    )
}

export default Login;