import { combineReducers } from 'redux';
import loginReducer from './login';
import detailReportReducer from './detailReport';
import planListReducer from './planList';

const rootReducer = combineReducers({
  login: loginReducer,
  detailReport: detailReportReducer,
  planList: planListReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
