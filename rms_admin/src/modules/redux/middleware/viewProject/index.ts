import { getViewProject } from '../../../../util/api/viewProject';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_VIEW_PROJECT } from '../../action/viewProject/interface';
import { reducerType } from '../../reducer';
import ViewProjectState from '../../reducer/viewProject/interface';

const getStateFunc = (state: reducerType): ViewProjectState => state.viewProject;

const viewProjectGetSaga = function* (): any {
  const type = 'VIEW/GET_VIEW_PROJECT';
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(getViewProject, accessToken, state.page, state.field);
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

function* viewProjectSaga() {
  yield takeLatest(GET_VIEW_PROJECT, viewProjectGetSaga);
}

export default viewProjectSaga;