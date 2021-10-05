import { combineReducers } from 'redux';
import changePasswordReducer from './changePassword';
import loginReducer from './login';
import detailReportReducer from './detailReport';
import modalReducer from './modal';
import planListReducer from './planList';
import reportListReducer from './reportList';

const rootReducer = combineReducers({
  login: loginReducer,
  detailReport: detailReportReducer,
  planList: planListReducer,
  modal: modalReducer,
  chagePassword: changePasswordReducer,
  reportList: reportListReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
