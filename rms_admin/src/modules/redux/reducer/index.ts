import { combineReducers } from 'redux';
import changePasswordReducer from './changePassword';
import loginReducer from './login';
import modalReducer from './modal';
import detailPlanReducer from './plan';
import planListReducer from './planList';
import reportListReducer from './reportList';

const rootReducer = combineReducers({
  login: loginReducer,
  planList: planListReducer,
  modal: modalReducer,
  chagePassword: changePasswordReducer,
  reportList: reportListReducer,
  detailPlan: detailPlanReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
