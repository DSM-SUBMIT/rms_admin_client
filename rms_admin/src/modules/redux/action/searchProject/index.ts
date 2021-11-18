import { createAction } from "typesafe-actions";
import { SearchProjectType } from "../../../../constance/serchProject";
import { error } from "../../../../models/error";
import {
  GET_SEARCH_PROJECT,
  GET_SEARCH_PROJECT_FAILURE,
  GET_SEARCH_PROJECT_SUCCESS,
  PAGE,
  QUERY,
  CURRENT_PROJECT_ID,
  CURRENT_PROJECT_TITLE,
  CURRENT_PROJECT_SERVICE_URL,
  CURRENT_PROJECT_GIT_URL,
  CURRENT_PROJECT_DOCS_URL
} from "./interface";


export const getSearchProject = createAction(GET_SEARCH_PROJECT)();
export const getSearchProjectSuccess = createAction(GET_SEARCH_PROJECT_SUCCESS)<SearchProjectType>();
export const getSearchProjectFailure = createAction(GET_SEARCH_PROJECT_FAILURE)<error>();
export const setQuery = createAction(QUERY)<string>();
export const setPage = createAction(PAGE)<number>();
export const setCurrentProjectId = createAction(CURRENT_PROJECT_ID)<number>();
export const setCurrentProjectTitle = createAction(CURRENT_PROJECT_TITLE)<string>();
export const setCurrentProjectDocsUrl = createAction(CURRENT_PROJECT_DOCS_URL)<string>();
export const setCurrentProjectGitUrl = createAction(CURRENT_PROJECT_GIT_URL)<string>();
export const setCurrentProjectServiceUrl = createAction(CURRENT_PROJECT_SERVICE_URL)<string>();


export type searchProjectActionType =
  | ReturnType<typeof getSearchProject>
  | ReturnType<typeof getSearchProjectSuccess>
  | ReturnType<typeof getSearchProjectFailure>
  | ReturnType<typeof setQuery>
  | ReturnType<typeof setPage>
  | ReturnType<typeof setCurrentProjectId>
  | ReturnType<typeof setCurrentProjectTitle>
  | ReturnType<typeof setCurrentProjectDocsUrl>
  | ReturnType<typeof setCurrentProjectGitUrl>
  | ReturnType<typeof setCurrentProjectServiceUrl>;