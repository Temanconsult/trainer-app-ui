import {call, put, takeEvery} from 'redux-saga/effects';
import {SIGNUP, LOGIN} from '../constants/auth';
import {
  signupSuccess,
  signupFailure,
  loginSuccess,
  loginFailure,
} from '../actions/auth';
import {signup as signupAPI, login as loginAPI} from '../../api/auth';

export function* signup() {
  try {
    const response = yield call(signupAPI, {});
    console.log('got here', response);
    yield put(signupSuccess('Request successful'));
  } catch (error) {
    console.log('got here', error);
    yield put(signupFailure('Request failed!!!'));
  }
}

export function* login() {
  try {
    const response = yield call(loginAPI, {});
    console.log('got here', response);
    yield put(loginSuccess('Request successful'));
  } catch (error) {
    console.log('got here', error);
    yield put(loginFailure('Request failed!!!'));
  }
}

export function* watchSignup() {
  yield takeEvery(SIGNUP, signup);
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login);
}
