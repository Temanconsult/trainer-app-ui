import {put, takeEvery} from 'redux-saga/effects';
import {SIGNUP, LOGIN} from '../constants/auth';
import {
  signupSuccess,
  signupFailure,
  loginSuccess,
  loginFailure,
} from '../actions/auth';
// import {signup as signupAPI, login as loginAPI} from '../../api/auth';

export function* signup() {
  try {
    // const response = yield call(signupAPI, {});
    yield put(signupSuccess('Request successful'));
  } catch (error) {
    console.log('got here');
    yield put(signupFailure('Request failed!!!'));
  }
}

export function* login() {
  try {
    // const response = yield call(loginAPI, {});
    yield put(loginSuccess('Request successful'));
  } catch (error) {
    console.log('got here');
    yield put(loginFailure('Request failed!!!'));
  }
}

export function* watchSignup() {
  yield takeEvery(SIGNUP, signup);
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login);
}
