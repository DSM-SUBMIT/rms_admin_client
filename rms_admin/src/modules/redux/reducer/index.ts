import { combineReducers } from 'redux';
import loginReducer from './login';
import planListReducer from './planList';
import searchProjectReducer from './searchProject';
import viewProjectReducer from './viewProject';

const rootReducer = combineReducers({ login: loginReducer, viewProject : viewProjectReducer, planList: planListReducer, searchProject : searchProjectReducer});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;