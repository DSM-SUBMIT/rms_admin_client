import { createAction } from 'typesafe-actions';
import { error } from '../../../../models/error';
import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_SUCCESS,
  CHECK_PASSWORD,
  IS_CHANGE_PASSWORD,
  NEW_PASSWORD,
  OLD_PASSWORD,
} from './interface';

export const setOldPassword = createAction(OLD_PASSWORD)<string>();
export const setNewPassword = createAction(NEW_PASSWORD)<string>();
export const setCheckPassword = createAction(CHECK_PASSWORD)<string>();
export const passwordChange = createAction(CHANGE_PASSWORD)();
export const passwordChangeSuccess = createAction(CHANGE_PASSWORD_SUCCESS)();
export const paaswordChangeFailure = createAction(CHANGE_PASSWORD_FAILURE)<error>();
export const isChangePassword = createAction(IS_CHANGE_PASSWORD)();

export type changePasswordActionType =
  | ReturnType<typeof setOldPassword>
  | ReturnType<typeof setNewPassword>
  | ReturnType<typeof setCheckPassword>
  | ReturnType<typeof passwordChange>
  | ReturnType<typeof passwordChangeSuccess>
  | ReturnType<typeof paaswordChangeFailure>
  | ReturnType<typeof isChangePassword>;
