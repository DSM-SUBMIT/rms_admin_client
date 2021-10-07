import { call, put, select, takeLatest } from 'redux-saga/effects';
import { REFRESH_TOKEN, TOKEN } from '../../action/login/interface';
import { getToken, refreshToken } from '../../../../util/api/login';
import { reducerType } from '../../reducer';
import LoginState from '../../reducer/login/interface';

const getStateFunc = (state: reducerType): LoginState => state.login;

export const loginRequestSaga = function* (): any {
  const SUCCESS = 'LOGIN/TOKEN_SUCCESS';
  const FAILURE = 'LOGIN/TOKEN_FAILURE';
  const state = yield select(getStateFunc);

  try {
    const response = yield call(getToken, {
      id: state.id,
      password: state.password,
    });
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: 'LOGIN/TOKEN' },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: `Network Error`,
          status: 500,
        },
      });
    }
  }
};

export const refreshTokenSaga = function* (action: any): any {
  const SUCCESS = 'REFRESH_TOKEN_SUCCESS';
  const FAILURE = 'REFRESH_TOKEN_FAILURE';
  try {
    yield call(refreshToken);
    yield put({
      type: SUCCESS,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: REFRESH_TOKEN },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: `Network Error`,
          status: 500,
        },
      });
    }
  }
};

function* loginSaga() {
  yield takeLatest(TOKEN, loginRequestSaga);
  yield takeLatest(REFRESH_TOKEN, refreshTokenSaga);
}

export default loginSaga;
