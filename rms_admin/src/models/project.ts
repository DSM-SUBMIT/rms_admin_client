export type ProjectType = 'PERSONAL' | 'TEAM';

export interface Project {
    id: string;
    title: string;
    type: ProjectType;
    club: string;
    tags: string[]
}

/*
    typescript
    redux

    react
    redux-saga
    typesafe-actions
 */