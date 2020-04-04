import * as types from '../constants/test';

export type TestAction = {
  type: string;
  message: string;
  error: string;
};

export interface TestState {
  isLoading: boolean;
  message: string;
  error: string;
};

export const initialState: TestState = {
  isLoading: false,
  message: '',
  error: '',
};

export default (state = initialState, action: TestAction) => {
  switch (action.type) {
    case types.REDUX_TEST_REQUEST:
      return {...state, isLoading: true};

    case types.REDUX_TEST_REQUEST_SUCCESS:
      return {...state, message: action.message, isLoading: false};

    case types.REDUX_TEST_REQUEST_FAILURE:
      return {...state, error: action.error, isLoading: false};

    default:
      return state;
  }
};
