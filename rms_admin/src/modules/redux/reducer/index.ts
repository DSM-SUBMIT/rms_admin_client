import { combineReducers } from 'redux';
import changePasswordReducer from './changePassword';
import loginReducer from './login';
import detailReportReducer from './detailReport';
import modalReducer from './modal';
import detailPlanReducer from './plan';
import planListReducer from './planList';
import reportListReducer from './reportList';
import searchProjectReducer from './searchProject';
import viewProjectReducer from './viewProject';

const rootReducer = combineReducers({
  login: loginReducer,
  detailReport: detailReportReducer,
  planList: planListReducer,
  modal: modalReducer,
  chagePassword: changePasswordReducer,
  reportList: reportListReducer,
  detailPlan: detailPlanReducer,
  searchProject: searchProjectReducer,
  viewProject: viewProjectReducer
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
