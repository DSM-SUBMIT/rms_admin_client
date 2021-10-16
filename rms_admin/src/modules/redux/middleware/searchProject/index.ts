import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from 'typesafe-actions';
import { getSearchProject } from '../../../../util/api/searchProject';
import { GET_SEARCH_PROJECT } from '../../action/searchProject/interface';
import { reducerType } from '../../reducer';
import SearchProjectState from '../../reducer/searchProject/interface';

const getStateFunc = (state: reducerType): SearchProjectState => state.searchProject;

export const getSearchProjectSaga = function* (action: PayloadAction<'SEARCH_PROJECT/GET_SEARCH_PROJECT', string>): any {
  const type = "PROJECT/GET_SEARCH_PROJECT";
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getSearchProject, accessToken, state.query, state.page);
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

function* searchProjectSaga() {
  yield takeLatest(GET_SEARCH_PROJECT, getSearchProjectSaga);
}

export default searchProjectSaga;
