import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { getPlanDetail } from '../../../../util/api/plan';
import { GET_DETAIL_PLAN } from '../../action/plan/interface';
import { reducerType } from '../../reducer';
import DetailPlanState from '../../reducer/plan/interface';

const getStateFunc = (state: reducerType): DetailPlanState => state.detailPlan;

const getDetailPlanSaga = function* (): any {
  const type = 'PLAN/GET_DETAIL_PLAN';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getPlanDetail, accessToken, state.id);
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

function* detailPlanSaga() {
  yield takeLatest(GET_DETAIL_PLAN, getDetailPlanSaga);
}

export default detailPlanSaga;
