/*
    Action
    Reducer
    State
 */

// Action name
import {Project} from "../../../models/project";
import {Action} from "redux";
import {PayloadAction} from "typesafe-actions";

const ADD_PROJECT = 'ADD PROJECT';

// action creator
const addProject: (project: Project) => PayloadAction<'ADD PROJECT', Project> = (project: Project) => {
    return {
        type: ADD_PROJECT,
        payload: project
    }
}

// Action object
const action = {
    type: 'ACTION NAME',
    payload: {

    }
}

type ProjectActionType = 'ADD PROJECT';

const initialState: Project[] = [];

const projectReducer = (state: Project[] = initialState, action: PayloadAction<ProjectActionType, Project>) => {
    switch (action.type) {
        case ADD_PROJECT:
            return [...state, action.payload]
    }

    return [...state];
}


projectReducer(initialState, addProject({
    type: 'PERSONAL',
    title: 'RMS',
    tags: ['WEB'],
    id: '1',
    club: 'SUBMIT'
}));
