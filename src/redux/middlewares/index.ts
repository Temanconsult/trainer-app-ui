import {all} from 'redux-saga/effects';
import {watchTestRedux} from './test';
import {watchSignup, watchLogin} from './auth';

function* rootSaga() {
  yield all([watchTestRedux(), watchSignup(), watchLogin()]);
}

export default rootSaga;
