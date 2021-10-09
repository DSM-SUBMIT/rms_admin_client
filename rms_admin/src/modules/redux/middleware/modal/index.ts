import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FEEDBACK } from '../../action/modal/interface';
import { saveFeedback } from '../../../../util/api/modal';
import { reducerType } from '../../reducer';
import ModalState from '../../reducer/modal/interface';

const getStateFunc = (state: reducerType): ModalState => state.modal;

export const feedbackRequestSaga = function* (): any {
  const SUCCESS = 'MODAL/FEEDBACK_SUCCESS';
  const FAILURE = 'MODAL/FEEDBACK_FAILURE';
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response = yield call(
      saveFeedback,
      accessToken,
      state.id,
      state.comment,
      state.postType,
      state.approveType,
    );
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: 'MODAL/FEEDBACK' },
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

function* modalSaga() {
  yield takeLatest(FEEDBACK, feedbackRequestSaga);
}

export default modalSaga;
