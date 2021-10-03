import { all } from 'redux-saga/effects';
import loginSaga from './login';
import planListSaga from './planList';

export default function* rootSaga() {
  yield all([loginSaga(), planListSaga()]);
}