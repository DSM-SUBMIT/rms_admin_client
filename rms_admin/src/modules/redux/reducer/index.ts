import { combineReducers } from 'redux';
import loginReducer from './login';
import planListReducer from './planList';

const rootReducer = combineReducers({ login: loginReducer, planList: planListReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;