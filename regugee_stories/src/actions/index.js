import axios from 'axios';

import axiosWithAuth from '../utils/axiosWithAuth';
import { parse } from 'path';

// Actions

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const UNAUTH = 'UNAUTH';
export const FETCHPOST_START = 'FETCHPOST_START';
export const FETCHPOST_SUCCESS = 'FETCHPOST_SUCCESS';
export const FETCHPOST_FAILURE = 'FETCHPOST_FAILURE';
export const APPROVE_START = 'APPROVE_START';
export const APPROVE_SUCCESS = 'APPROVE_SUCCESS';
export const APPROVE_FAILURE = 'APPROVE_FAILURE';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// Endpoints

const _BASE_ = 'https://refugee-stories-api19.herokuapp.com';
const _REAUTH_ = `${_BASE_}/auth`
const _LOGIN_ = `${_BASE_}/auth/login`;
const _REGISTER_ = `${_BASE_}/auth/register`;
const _POSTS_ = `${_BASE_}/posts`;
const _AWAITING_POSTS_ = `${_BASE_}/posts/awaiting`;
const _APPROVE_ = `${_BASE_}/posts/approve`;

// Exports

export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  })
}

export const approve = id => dispatch => {
  dispatch({
    type: APPROVE_START
  })
  return axiosWithAuth().post(`${_APPROVE_}/${id}`)
  .then(() => {
    dispatch({
      type: APPROVE_SUCCESS,
    })
  })
  .catch(err => {
    console.log(err.response);

    dispatch({
      type: APPROVE_FAILURE,
      payload: parseError(err, 'An error occured while approving this story.')
    })
  })
}

export const fetchUnapprovedPosts = () => dispatch => {
  dispatch({
    type: FETCHPOST_START
  })
  return axiosWithAuth().get(_AWAITING_POSTS_)
  .then(res => {
    dispatch({
      type: FETCHPOST_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err.response);

    dispatch({
      type: FETCHPOST_FAILURE,
      payload: parseError(err, 'An error occured while fetching stories.')
    })
  })
}

export const fetchPosts = () => dispatch => {
  dispatch({
    type: FETCHPOST_START
  })
  return axios.get(_POSTS_)
  .then(res => {
    console.log(res.data);
    dispatch({
      type: FETCHPOST_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err.response);

    dispatch({
      type: FETCHPOST_FAILURE,
      payload: parseError(err, 'An error occured while fetching stories.')
    })
  })
}

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
    localStorage.removeItem('token');
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

    dispatch({
      type: AUTH_FAILURE,
      payload: parseError(err, 'Failed to login, please try again.')
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
      payload: parseError(err, 'Failed to register, please try again.')
    })
  })
}

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch({
    type: UNAUTH
  })
}

const parseError = (err, altMsg = 'An unknown error occured.') => {
  return err.response && err.response.data && err.response.data.message ?
              err.response.data.message : altMsg;
}