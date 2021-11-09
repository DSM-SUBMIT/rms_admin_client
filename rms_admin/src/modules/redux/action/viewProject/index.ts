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
    CURRENTPROJECTTITLE
} from './interface';

export const getViewProject = createAction(GET_VIEW_PROJECT)();
export const getViewProjectSuccess = createAction(GET_VIEW_PROJECT_SUCCESS)<ViewProjectResponseType>();
export const getViewProjectFailure = createAction(GET_VIEW_PROJECT_FAILURE)<error>();
export const setField = createAction(FIELD)<CategoryStateType>();
export const setPage = createAction(PAGE)<number>();
export const setCurrentProjectId = createAction(CURRENTPROJECTID)<number>();
export const setCurrentProjectTitle = createAction(CURRENTPROJECTTITLE)<string>();


export type viewProjectActionType =
  | ReturnType<typeof getViewProject>
  | ReturnType<typeof getViewProjectSuccess>
  | ReturnType<typeof getViewProjectFailure>
  | ReturnType<typeof setField>
  | ReturnType<typeof setPage>
  | ReturnType<typeof setCurrentProjectId>
  | ReturnType<typeof setCurrentProjectTitle>;