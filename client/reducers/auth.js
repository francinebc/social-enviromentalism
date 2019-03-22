import {getToken, clearToken} from '../utils/tokens'

// Our default state
const initialState = {
  error: null,
  loggedIn: !!getToken(),
  newRegistration: false,
  pending: false
}

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case 'SIGNIN_PENDING':
    case 'REGISTER_PENDING':
      return {
        ...state,
        loggedIn: false,
        pending: true
      }
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        error: null,
        loggedIn: true,
        pending: false
      }
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        error: null,
        newRegistration: true,
        loggedIn: true,
        pending: false
      }
    case 'SIGNIN_ERROR':
    case 'REGISTER_ERROR':
      return {
        ...state,
        error: true,
        loggedIn: false,
        pending: false
      }
    case 'LOGOUT':
      clearToken()
      return {
        ...state,
        loggedIn: false
      }
    default:
      return state
  }
}