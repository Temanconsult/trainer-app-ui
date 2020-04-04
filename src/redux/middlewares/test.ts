import {put, takeEvery} from 'redux-saga/effects';
import {REDUX_TEST_REQUEST} from '../constants/test';
import {
  reduxRequestSuccess,
  reduxRequestFailure,
} from '../actions/test';

export function* testRedux() {
  try {
    yield put(reduxRequestSuccess('Request successful'));
  } catch (error) {
    yield put(reduxRequestFailure('Request failed!!!'));
  }
};

export function* watchTestRedux() {
  yield takeEvery(REDUX_TEST_REQUEST, testRedux);
};
