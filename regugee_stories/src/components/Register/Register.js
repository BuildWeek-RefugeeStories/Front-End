import React from 'react';
import './Register.css'

function Register() {
    return (
        <div className='Register'>   
            <h1>Register</h1>
            <form className='register-form'>
                <input placeholder='Email'></input>
                <input placeholder='Username'></input>
                <input placeholder='Password'></input>
                <button>Submit</button>
            </form> {/* register-form end */}
        </div> /* Register end */
    )
}

export default Register;