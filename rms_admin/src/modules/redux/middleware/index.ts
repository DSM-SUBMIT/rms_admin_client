import { all } from 'redux-saga/effects';
import loginSaga from './login';
import detailReportSaga from './detailReport';
import planListSaga from './planList';

export default function* rootSaga() {
  yield all([loginSaga(), detailReportSaga()]);
  yield all([loginSaga(), planListSaga()]);
}
