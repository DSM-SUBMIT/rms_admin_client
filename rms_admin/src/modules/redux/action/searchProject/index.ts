import { createAction } from "typesafe-actions";
import { SearchProjectResponseType } from "../../../../constance/serchProject";
import { error } from "../../../../models/error";
import { GET_SEARCH_PROJECT, GET_SEARCH_PROJECT_FAILURE, GET_SEARCH_PROJECT_SUCCESS } from "./interface";


export const getSearchProject = createAction(GET_SEARCH_PROJECT)();
export const getSearchProjectSuccess = createAction(GET_SEARCH_PROJECT_SUCCESS)<SearchProjectResponseType>();
export const getSearchProjectFailure = createAction(GET_SEARCH_PROJECT_FAILURE)<error>();

export type searchProjectActionType =
  | ReturnType<typeof getSearchProject>
  | ReturnType<typeof getSearchProjectSuccess>
  | ReturnType<typeof getSearchProjectFailure>;