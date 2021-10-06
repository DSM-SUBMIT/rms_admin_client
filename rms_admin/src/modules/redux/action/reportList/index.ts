import { createAction } from "typesafe-actions";
import { ReportListResponseType } from "../../../../models/dto/response/reportListResponse";
import { error } from "../../../../models/error";
import { GET_REPORT_LIST, GET_REPORT_LIST_FAILURE, GET_REPORT_LIST_SUCCESS, PAGE } from "./interface";

export const getReportList = createAction(GET_REPORT_LIST)();
export const getReportListSuccess = createAction(GET_REPORT_LIST_SUCCESS)<ReportListResponseType>();
export const getReportListFailure = createAction(GET_REPORT_LIST_FAILURE)<error>();
export const setPage = createAction(PAGE)<number>();

export type reportListActionType =
  | ReturnType<typeof getReportList>
  | ReturnType<typeof getReportListSuccess>
  | ReturnType<typeof getReportListFailure>
  | ReturnType<typeof setPage>;