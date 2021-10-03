import { all } from 'redux-saga/effects';
import changePasswordSaga from './changePassword';
import loginSaga from './login';
import planListSaga from './planList';

export default function* rootSaga() {
  yield all([loginSaga(), planListSaga(), changePasswordSaga()]);
}