import { combineReducers } from 'redux';
import loginReducer from './login';
import detailReportReducer from './detailReport';

const rootReducer = combineReducers({ login: loginReducer, detailReport: detailReportReducer });

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
