import {setToken} from '../utils/tokens'
import {register as registerApi, login as loginApi} from '../api/auth'

// Actions are payloads of information that send data from your application to your store. 

// Actions for loging in and registering
export const loginPending = () => {
  return {
    type: 'LOGIN_PENDING'
  }
}

export const loginSuccess = () => {
  return {
    type: 'LOGIN_SUCCESS'
  }
}

export const loginError = error => {
  return {
    type: 'LOGIN_ERROR',
    error
  }
}

export const registerPending = () => {
  return {
    type: 'REGISTER_PENDING'
  }
}

export const registerSuccess = () => {
  return {
    type: 'REGISTER_SUCCESS'
  }
}

export const registerError = error => {
  return {
    type: 'REGISTER_ERROR',
    error
  }
}
// Sign in. Tokens are encrypted versions of a users password. This protects your password from Hackers.
export const login = (user) => dispatch => {
  dispatch(loginPending())
  return loginApi(user)
    .then(res => {
      setToken(res.token)
      dispatch(loginSuccess())
    })
    .catch(err => {
      dispatch(loginError(err))
    })
}

// The dispatch sends the data typed in to our store
// Our register action
export const register = (user) => dispatch => {
  dispatch(registerPending())
  return registerApi(user)
    .then(res => {
      setToken(res.token)
      dispatch(registerSuccess())
    })
    .catch(err => {
      return dispatch(registerError(err))
    })
}

// Log out action
export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}