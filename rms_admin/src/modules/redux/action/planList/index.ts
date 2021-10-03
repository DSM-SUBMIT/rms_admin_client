import { createAction } from "typesafe-actions";
import { PlanListResponseType } from "../../../../models/dto/response/planListResponse";
import { error } from "../../../../models/error";
import { GET_PLAN_LIST, GET_PLAN_LIST_FAILURE, GET_PLAN_LIST_SUCCESS, PAGE } from "./interface";


export const getPlanList = createAction(GET_PLAN_LIST)();
export const getPlanListSuccess = createAction(GET_PLAN_LIST_SUCCESS)<PlanListResponseType>();
export const getPlanListFailure = createAction(GET_PLAN_LIST_FAILURE)<error>();
export const setPage = createAction(PAGE)<number>();

export type planListActionType =
  | ReturnType<typeof getPlanList>
  | ReturnType<typeof getPlanListSuccess>
  | ReturnType<typeof getPlanListFailure>
  | ReturnType<typeof setPage>;