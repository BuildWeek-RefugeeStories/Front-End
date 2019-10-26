import axios from 'axios';

import axiosWithAuth from '../utils/axiosWithAuth';

// Actions

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const UNAUTH = 'UNAUTH';

// Endpoints

const _BASE_ = 'https://refugee-stories-api19.herokuapp.com';
const _REAUTH_ = `${_BASE_}/auth`
const _LOGIN_ = `${_BASE_}/auth/login`;
const _REGISTER_ = `${_BASE_}auth/register`;

// Exports

export const reauth = () => dispatch => {
  dispatch({
    type: AUTH_START
  })
  return axiosWithAuth().post(_REAUTH_)
  .then(res => {
    console.log(res.data);
    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err.response);
    dispatch({
      type: UNAUTH
    })
  })
}

export const login = (email, password) => dispatch => {
  dispatch({
    type: AUTH_START,
  })
  return axios.post(_LOGIN_, {email, password})
  .then(res => {
    localStorage.setItem('token', res.data.token);
    console.log(res.data);
    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err.response);

    const message = err.response ?
                    err.response.data.message : 'Failed to login, please try again.';
    dispatch({
      type: AUTH_FAILURE,
      payload: message
    })
  })
}

export const register = (email, password, firstName, lastName, country) => dispatch => {
  dispatch({
    type: AUTH_START,
  })
  return axios.post(_REGISTER_, {email, password, firstName, lastName, country})
  .then(res => {
    console.log(res.data);
    localStorage.setItem('token', res.data.token);
    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err.response);
    dispatch({
      type: AUTH_FAILURE,
      payload: err.response.data.message
    })
  })
}

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch({
    type: UNAUTH
  })
}