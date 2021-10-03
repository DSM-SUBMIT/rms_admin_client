import { combineReducers } from 'redux';
import loginReducer from './login';
import planListReducer from './planList';
import reportListReducer from './reportList';

const rootReducer = combineReducers({ login: loginReducer, planList: planListReducer, reportList: reportListReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;