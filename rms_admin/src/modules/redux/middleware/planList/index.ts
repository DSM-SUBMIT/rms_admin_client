import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { getPlanList } from '../../../../util/api/planList';
import { GET_PLAN_LIST } from '../../action/planList/interface';
import { reducerType } from '../../reducer';
import PlanListState from '../../reducer/planList/interface';

const getStateFunc = (state: reducerType): PlanListState => state.planList;

const getPlanListSaga = function* (): any {
  const type = "PLANLIST/GET_PLAN_LIST";
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getPlanList, accessToken, state.page);
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

function* planListSaga() {
  yield takeLatest(GET_PLAN_LIST, getPlanListSaga);
}

export default planListSaga;
