import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { login, register, reauth } from '../../actions';

const Login = (props) => {

    if(props.token) {
        props.history.push('/');
    } else {
        if(localStorage.getItem('token')) {
            props.reauth()
            .then(() => {
                props.history.push('/');
            });
        }
    }

    const [form, setForm] = useState({
        email: '',
        password: '',
        error: ''
    })

    const handleChange = e => {
        setForm({...form,
            error: '',
            [e.target.name]: e.target.value})
    }

    // Validate our form data
    const vaildate = () => {
        if(!form.email.trim()) {
            setError('Email field is required');
            return false;
        }
        else if(!form.password.trim()) {
            setError('Please enter a password');
            return false;
        }
        // Form data is valid
        else return true;
    }

    const setError = err => {
        setForm({
            ...form,
            error: err
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        if(vaildate())
            props.login(form.email, form.password)
            .then(() => {
                props.history.push('/');
            });
    }

    return (
        <div className='Login'>
            <h1>Login</h1>
            <p>Please enter your email and password</p>
            <form onSubmit={onSubmit} className='login-form'>
                <input
                onChange={handleChange} 
                type='email' 
                name='email' 
                disabled={props.authenticating}
                placeholder='Email'>
                </input>
                <input
                onChange={handleChange} 
                type='password'
                name='password' 
                disabled={props.authenticating}
                placeholder='Password'>
                </input>
                <button disabled={props.authenticating} type="submit" action="submit">Login</button>
                <div className='error'>
                    {form.error && form.error}
                    {props.authError && props.authError}
                </div>
            </form> {/* login-form end */}

            <div id='register'>
                <Link to='/register'>Not Registered?</Link>
            </div>

        </div> /* Login end */
    )
}

const mapStateToProps = state => ({
    authenticating: state.authenticating,
    authError: state.authError,
    token: state.token
});

export default connect(mapStateToProps, { login, register, reauth })(Login);