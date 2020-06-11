import * as types from '../constants/auth';

export const signup = (payload) => ({
  type: types.SIGNUP,
  payload,
});

export const signupSuccess = (payload) => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});

export const signupFailure = (payload) => ({
  type: types.SIGNUP_FAILURE,
  payload,
});

export const login = (payload) => ({
  type: types.LOGIN,
  payload,
});

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload) => ({
  type: types.LOGIN_FAILURE,
  payload,
});
