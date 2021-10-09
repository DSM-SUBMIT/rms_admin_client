import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { getReportList } from '../../../../util/api/reportList';
import { GET_REPORT_LIST } from '../../action/reportList/interface';
import { reducerType } from '../../reducer';
import ReportListState from '../../reducer/reportList/interface';

const getStateFunc = (state: reducerType): ReportListState => state.reportList;

const getReportListSaga = function* (): any {
  const type = 'REPORTLIST/GET_REPORT_LIST';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getReportList, accessToken, state.page);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: type },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: 'Network Error',
          status: 500,
        },
      });
    }
  }
};

function* reportListSaga() {
  yield takeLatest(GET_REPORT_LIST, getReportListSaga);
}

export default reportListSaga;