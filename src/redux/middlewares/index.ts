import { all } from  'redux-saga/effects';
import { watchTestRedux } from './test';

function* rootSaga() {
  yield all([watchTestRedux()])
}

export default rootSaga;
