import { all } from 'redux-saga/effects';
import changePasswordSaga from './changePassword';
import loginSaga from './login';
import detailReportSaga from './detailReport';
import viewProjectSaga from './viewProject';
import planListSaga from './planList';
import reportListSaga from './reportList';
import modalSaga from './modal';
import searchProjectSaga from './searchProject';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    detailReportSaga(),
    planListSaga(),
    changePasswordSaga(),
    viewProjectSaga(),
    searchProjectSaga(),
    reportListSaga(),
    modalSaga(),
  ]);
}
