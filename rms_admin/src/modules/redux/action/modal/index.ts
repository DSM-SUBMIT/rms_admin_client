import { createAction } from "typesafe-actions";
import { MODAL_OFF, MODAL_ON } from "./interface";


export const setModalOn = createAction(MODAL_ON)<string>();
export const setModalOff = createAction(MODAL_OFF)<string>();

export type modalActionType = ReturnType<typeof setModalOff> | ReturnType<typeof setModalOn>;