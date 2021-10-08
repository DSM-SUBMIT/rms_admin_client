import { all } from 'redux-saga/effects';
import changePasswordSaga from './changePassword';
import loginSaga from './login';
import planListSaga from './planList';
import reportListSaga from './reportList';
import modalSaga from './modal';
import detailPlanSaga from './plan';
import detailReportSaga from './detailReport';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    detailReportSaga(),
    planListSaga(),
    changePasswordSaga(),
    reportListSaga(),
    modalSaga(),
    detailPlanSaga(),
  ]);
}
