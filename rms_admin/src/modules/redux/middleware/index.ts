import { all } from 'redux-saga/effects';
import changePasswordSaga from './changePassword';
import loginSaga from './login';
import detailPlanSaga from './plan';
import planListSaga from './planList';
import reportListSaga from './reportList';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    planListSaga(),
    changePasswordSaga(),
    reportListSaga(),
    detailPlanSaga(),
  ]);
}
