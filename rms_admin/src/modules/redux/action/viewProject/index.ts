import { error } from '../../../../models/error';
import { CategoryStateType, ViewProjectResponseType } from '../../../../constance/viewProject';
import { createAction } from 'typesafe-actions';
import {
    GET_VIEW_PROJECT,
    GET_VIEW_PROJECT_SUCCESS,
    GET_VIEW_PROJECT_FAILURE,
    FIELD,
    PAGE,
    CURRENTPROJECTID,
    CURRENTPROJECTTITLE,
    CURRENTPROJECT_DOCS_URL,
    CURRENTPROJECT_GIT_URL,
    CURRENTPROJECT_SERVICE_URL
} from './interface';

export const getViewProject = createAction(GET_VIEW_PROJECT)();
export const getViewProjectSuccess = createAction(GET_VIEW_PROJECT_SUCCESS)<ViewProjectResponseType>();
export const getViewProjectFailure = createAction(GET_VIEW_PROJECT_FAILURE)<error>();
export const setField = createAction(FIELD)<CategoryStateType>();
export const setPage = createAction(PAGE)<number>();
export const setCurrentProjectId = createAction(CURRENTPROJECTID)<number>();
export const setCurrentProjectTitle = createAction(CURRENTPROJECTTITLE)<string>();
export const setCurrentProjectDocsUrl = createAction(CURRENTPROJECT_DOCS_URL)<string>();
export const setCurrentProjectServiceUrl = createAction(CURRENTPROJECT_SERVICE_URL)<string>();
export const setCurrentProjectGitUrl = createAction(CURRENTPROJECT_GIT_URL)<string>();


export type viewProjectActionType =
  | ReturnType<typeof getViewProject>
  | ReturnType<typeof getViewProjectSuccess>
  | ReturnType<typeof getViewProjectFailure>
  | ReturnType<typeof setField>
  | ReturnType<typeof setPage>
  | ReturnType<typeof setCurrentProjectId>
  | ReturnType<typeof setCurrentProjectTitle>
  | ReturnType<typeof setCurrentProjectDocsUrl>
  | ReturnType<typeof setCurrentProjectServiceUrl>
  | ReturnType<typeof setCurrentProjectGitUrl>;