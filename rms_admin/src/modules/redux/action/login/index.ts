import { createAction } from "typesafe-actions";
import { ID, PASSWORD, TOKEN, TOKEN_FAILURE, TOKEN_SUCCESS } from "./interface";
import { error } from "../../../../models/error";

export const setId = createAction(ID)<string>();
export const setPassword = createAction(PASSWORD)<string>();
export const getToken = createAction(TOKEN)();
export const getTokenSuccess = createAction(TOKEN_SUCCESS)();
export const getTokenFailure = createAction(TOKEN_FAILURE)<error>();

export type loginActionType =
  | ReturnType<typeof setId>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof getToken>
  | ReturnType<typeof getTokenSuccess>
  | ReturnType<typeof getTokenFailure>;
