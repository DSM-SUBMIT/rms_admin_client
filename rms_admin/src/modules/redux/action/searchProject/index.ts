import { createAction } from "typesafe-actions";
import { SearchProjectType } from "../../../../constance/serchProject";
import { error } from "../../../../models/error";
import { GET_SEARCH_PROJECT, GET_SEARCH_PROJECT_FAILURE, GET_SEARCH_PROJECT_SUCCESS, PAGE } from "./interface";


export const getSearchProject = createAction(GET_SEARCH_PROJECT)<string>();
export const getSearchProjectSuccess = createAction(GET_SEARCH_PROJECT_SUCCESS)<SearchProjectType>();
export const getSearchProjectFailure = createAction(GET_SEARCH_PROJECT_FAILURE)<error>();
export const setPage = createAction(PAGE)<number>();

export type searchProjectActionType =
  | ReturnType<typeof getSearchProject>
  | ReturnType<typeof getSearchProjectSuccess>
  | ReturnType<typeof getSearchProjectFailure>
  | ReturnType<typeof setPage>;