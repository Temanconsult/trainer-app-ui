import * as types from '../constants/test';

export const reduxRequest = () => ({
  type: types.REDUX_TEST_REQUEST,
});

export const reduxRequestSuccess = (message: string) => ({
  type: types.REDUX_TEST_REQUEST_SUCCESS,
  message,
});

export const reduxRequestFailure = (error: string) => ({
  type: types.REDUX_TEST_REQUEST_FAILURE,
  error,
});
