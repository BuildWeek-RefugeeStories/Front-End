import * as actions from '../actions';

const initialState = {
  token: '',
  authenticating: false,
  authError: false,
  firstName: '',
  lastName: '',
  country: '',
  level: '',
  fetchingPosts: false,
  fetchPostError: '',
  posts: [],
  approving: false,
  approveError: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case (actions.AUTH_START): {
      return {
        ...state,
        authenticating: true,
        authError: ''
      }
    }
    case (actions.AUTH_SUCCESS): {
      return {
        ...state,
        authenticating: false,
        token: action.payload.token,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        country: action.payload.country,
        level: action.payload.level
      }
    }
    case (actions.AUTH_FAILURE): {
      return {
        ...state,
        authenticating: false,
        authError: action.payload
      }
    }
    case (actions.UNAUTH): {
      return {
        ...state,
        authenticating: false,
        authError: '',
        token: '',
        firstName: '',
        lastName: '',
        level: '',
        country: '',
      }
    }
    case (actions.FETCHPOST_START): {
      return {
        ...state,
        fetchPostError: '',
        fetchingPosts: true
      }
    }
    case (actions.FETCHPOST_SUCCESS): {
      return {
        ...state,
        fetchingPosts: false,
        posts: action.payload
      }
    }
    case (actions.FETCHPOST_FAILURE): {
      return {
        ...state,
        fetchingPosts: false,
        fetchPostError: action.payload
      }
    }
    case (actions.APPROVE_START): {
      return {
        ...state,
        approveError: '',
        approving: true
      }
    }
    case (actions.APPROVE_SUCCESS): {
      return {
        ...state,
        approving: false
      }
    }
    case (actions.APPROVE_FAILURE): {
      return {
        ...state,
        approving: false,
        approveError: action.payload
      }
    }
    case (actions.CLEAR_ERRORS): {
      return {
        ...state,
        authError: '',
        fetchPostError: '',
        approveError: ''
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;