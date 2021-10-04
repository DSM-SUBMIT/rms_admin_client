import { all } from 'redux-saga/effects';
import loginSaga from './login';
import viewProjectSaga from './viewProject';
import planListSaga from './planList';
import searchProjectSaga from './searchProject';

export default function* rootSaga() {
  yield all([loginSaga(), planListSaga(), viewProjectSaga(), searchProjectSaga()]);
}