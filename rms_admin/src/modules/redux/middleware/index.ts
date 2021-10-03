import { all } from 'redux-saga/effects';
import loginSaga from './login';
import detailReportSaga from './detailReport';

export default function* rootSaga() {
  yield all([loginSaga(), detailReportSaga()]);
}
