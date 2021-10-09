import { createAction } from 'typesafe-actions';
import { error } from '../../../../models/error';
import {
  MODAL_OFF,
  MODAL_ON,
  FEEDBACK,
  FEEDBACK_SUCCESS,
  FEEDBACK_FAILURE,
  SET_TYPE,
  SET_COMMENT,
  ID,
  APPROVETYPE,
} from './interface';

export const setModalOn = createAction(MODAL_ON)<string>();
export const setModalOff = createAction(MODAL_OFF)<string>();
export const feedback = createAction(FEEDBACK)<{ type: string; comment: string }>();
export const feedbackSuccess = createAction(FEEDBACK_SUCCESS)();
export const feedbackFailure = createAction(FEEDBACK_FAILURE)<error>();
export const setType = createAction(SET_TYPE)<string>();
export const setComment = createAction(SET_COMMENT)<string>();
export const id = createAction(ID)<string>();
export const setApproveType = createAction(APPROVETYPE)<string>();

export type modalActionType =
  | ReturnType<typeof setModalOff>
  | ReturnType<typeof setModalOn>
  | ReturnType<typeof feedback>
  | ReturnType<typeof feedbackSuccess>
  | ReturnType<typeof feedbackFailure>
  | ReturnType<typeof setType>
  | ReturnType<typeof setComment>
  | ReturnType<typeof id>
  | ReturnType<typeof setApproveType>;
