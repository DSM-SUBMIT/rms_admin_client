import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { changePassword } from '../../../../util/api/changePassword';
import { CHANGE_PASSWORD } from '../../action/changePassword/interface';
import { reducerType } from '../../reducer';
import ChangePasswordState from '../../reducer/changePassword/interface';

const getStateFunc = (state: reducerType): ChangePasswordState => state.chagePassword;

export const changePasswordRequestSaga = function* (): any {
  const SUCCESS = `${CHANGE_PASSWORD}_SUCCESS`;
  const FAILURE = `${CHANGE_PASSWORD}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(changePassword, accessToken, state.oldPassword, state.newPassword);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: CHANGE_PASSWORD },
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

function* changePasswordSaga(): any {
  yield takeLatest(CHANGE_PASSWORD, changePasswordRequestSaga);
}

export default changePasswordSaga;