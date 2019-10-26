import * as actions from '../actions';

const initialState = {
  token: '',
  authenticating: false,
  authError: false,
  firstName: '',
  lastName: '',
  country: '',
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
        country: '',
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;