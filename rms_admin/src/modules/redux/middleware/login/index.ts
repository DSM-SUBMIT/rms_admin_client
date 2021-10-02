import { call, put, select, takeLatest } from "redux-saga/effects";
import { TOKEN } from "../../action/login/interface";
import { getToken } from "../../../../util/api/login";
import { reducerType } from "../../reducer";
import LoginState from "../../reducer/login/interface";

const getStateFunc = (state: reducerType): LoginState => state.login;

export const loginRequestSaga = function* (): any {
  const SUCCESS = "LOGIN/SUCCESS";
  const FAILURE = "LOGIN/FAILURE";
  const state = yield select(getStateFunc);

  try {
    const response = yield call(getToken, state);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: "LOGIN/TOKEN" },
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
}

export default loginSaga;