import {call, put, takeEvery} from 'redux-saga/effects';
import {SIGNUP, LOGIN} from '../constants/auth';
import {
  signupSuccess,
  signupFailure,
  loginSuccess,
  loginFailure,
} from '../actions/auth';
import {signup as signupAPI, login as loginAPI} from '../../api/auth';
import {notify} from '../../helpers/toast';

export function* signup(payload) {
  try {
    yield call(signupAPI, payload);
    yield put(signupSuccess('Request successful'));
    notify('Signup successful');
    window.location.href = '/home';
  } catch (error) {
    yield put(signupFailure('Request failed!!!'));
    notify('error', error);
  }
}

export function* login() {
  try {
    yield call(loginAPI, {});
    yield put(loginSuccess('Request successful'));
    window.location.href = '/home';
  } catch (error) {
    yield put(loginFailure('Request failed!!!'));
    notify('error', error);
  }
}

export function* watchSignup() {
  yield takeEvery(SIGNUP, signup);
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login);
}
