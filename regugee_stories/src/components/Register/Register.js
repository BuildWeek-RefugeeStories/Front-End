import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { register, reauth } from '../../actions';

function Register(props) {

    if(props.token) {
        props.history.push('/');
    } else {
        if(localStorage.getItem('token')) {
            props.reauth()
            .then(() => {
                props.history.push('/');
            })
            .catch(() => {
                localStorage.removeItem('token');
            })
        }
    }

    const [credentials, setCredentials] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        country: ''
    })

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        // axios
        // .post("https://refugee-stories-api19.herokuapp.com/auth/register", credentials)
        // .then(res => {
        //     localStorage.setItem('token', res.data.token)
        //     props.history.push('/login')
        // })
        // .catch(err => console.log(err))
        props.register(credentials.email,
            credentials.password,
            credentials.firstName,
            credentials.lastName,
            credentials.country)
        .then(() => {
            if(props.token)
                props.history.push('/');
        });
    };
    
    return (
        <div className='Register'>   
            <h1>Register</h1>
            <p>Please fill in this form to create an account!</p>
            <form onSubmit={handleSubmit} className='register-form'>
                <input
                onChange={handleChange} 
                type='email' 
                name='email' 
                disabled={props.authenticating}
                placeholder='Email'>
                </input>
                <input
                onChange={handleChange}
                type='text' 
                name='firstName' 
                disabled={props.authenticating}
                placeholder='First Name'>
                </input>
                <input
                onChange={handleChange}
                type='text' 
                name='lastName' 
                disabled={props.authenticating}
                placeholder='Last Name'>
                </input>
                <input
                onChange={handleChange} 
                type='password'
                name='password' 
                disabled={props.authenticating}
                placeholder='Password'>
                </input>
                <input
                onChange={handleChange} 
                type='country'
                name='country' 
                disabled={props.authenticating}
                placeholder='Country'>
                </input>
                <div className='error'>
                    { props.authError && props.authError }
                </div>
                <button disabled={props.authenticating}>Submit</button>

                <div id='login'>
                <Link to='/login'>Already have an account?</Link>
                </div>
            </form> {/* register-form end */}
        </div> /* Register end */
    )
}

const mapStateToProps = state => ({
    authenticating: state.authenticating,
    token: state.token,
    authError: state.authError
})

export default connect(mapStateToProps, { register, reauth })(Register);