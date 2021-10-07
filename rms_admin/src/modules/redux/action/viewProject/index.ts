import { error } from '../../../../models/error';
import { CheckStateType, ViewProjectResponseType } from '../../../../constance/viewProject';
import { createAction } from 'typesafe-actions';
import {
    GET_VIEW_PROJECT,
    GET_VIEW_PROJECT_SUCCESS,
    GET_VIEW_PROJECT_FAILURE,
    FIELD,
    PAGE,
    CURRENTPROJECTID
} from './interface';

export const getViewProject = createAction(GET_VIEW_PROJECT)();
export const getViewProjectSuccess = createAction(GET_VIEW_PROJECT_SUCCESS)<ViewProjectResponseType>();
export const getViewProjectFailure = createAction(GET_VIEW_PROJECT_FAILURE)<error>();
export const setField = createAction(FIELD)<CheckStateType>();
export const setPage = createAction(PAGE)<number>();
export const setCurrentProjectId = createAction(CURRENTPROJECTID)<number>();

export type viewProjectActionType =
  | ReturnType<typeof getViewProject>
  | ReturnType<typeof getViewProjectSuccess>
  | ReturnType<typeof getViewProjectFailure>
  | ReturnType<typeof setField>
  | ReturnType<typeof setPage>
  | ReturnType<typeof setCurrentProjectId>;