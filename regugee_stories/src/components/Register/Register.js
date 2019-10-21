import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';

function Register(props) {

    const [credentials, setCreadentials] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    })

    const handleChange = e => {
        setCreadentials({...credentials, [e.target.name]: e.target.value})
        console.log('input value', credentials)
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post("https://refugee-stories-api19.herokuapp.com/auth/register", credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            props.history.push('/')
        })
        .catch(err => console.log(err))
    };

    
    return (
        <div className='Register'>   
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className='register-form'>
                <input
                onChange={handleChange} 
                type='email' 
                name='email' 
                placeholder='Email'>
                </input>
                <input
                onChange={handleChange}
                type='text' 
                name='firstName' 
                placeholder='First Name'>
                </input>
                <input
                onChange={handleChange}
                type='text' 
                name='lastName' 
                placeholder='Last Name'>
                </input>
                <input
                onChange={handleChange} 
                type='password'
                name='password' 
                placeholder='Password'>
                </input>
                <button>Submit</button>
            </form> {/* register-form end */}
        </div> /* Register end */
    )
}

export default Register;