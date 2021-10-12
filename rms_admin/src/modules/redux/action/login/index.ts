import { createAction } from 'typesafe-actions';
import {
  ERROR,
  ID,
  PASSWORD,
  REFRESH_TOKEN,
  REFRESH_TOKEN_FAILURE,
  REFRESH_TOKEN_SUCCESS,
  TOKEN,
  TOKEN_FAILURE,
  TOKEN_SUCCESS,
} from './interface';
import { error } from '../../../../models/error';

export const setId = createAction(ID)<string>();
export const setPassword = createAction(PASSWORD)<string>();
export const setError = createAction(ERROR)<error>();
export const getToken = createAction(TOKEN)();
export const getTokenSuccess = createAction(TOKEN_SUCCESS)();
export const getTokenFailure = createAction(TOKEN_FAILURE)<error>();
export const refreshToken = createAction(REFRESH_TOKEN)();
export const refreshTokenFailure = createAction(REFRESH_TOKEN_FAILURE)<error>();
export const refreshTokenSuccess = createAction(REFRESH_TOKEN_SUCCESS)();

export type loginActionType =
  | ReturnType<typeof setId>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof setError>
  | ReturnType<typeof getToken>
  | ReturnType<typeof getTokenSuccess>
  | ReturnType<typeof getTokenFailure>
  | ReturnType<typeof refreshToken>
  | ReturnType<typeof refreshTokenFailure>
  | ReturnType<typeof refreshTokenSuccess>;
