import planListState from './interface';
import { planListActionType } from '../../action/planList';
import {
  GET_PLAN_LIST_FAILURE,
  GET_PLAN_LIST_SUCCESS,
  PAGE,
} from '../../action/planList/interface';

const initState: planListState = {
  page: 1,
  total_page: 1,
  total_amount: 0,
  projects: [],
  error: null,
};

const planListReducer = (state: planListState = initState, action: planListActionType): planListState => {
  switch (action.type) {
    case GET_PLAN_LIST_SUCCESS:
      return {
        ...state,
        total_page: action.payload.total_page,
        total_amount: action.payload.total_amount,
        projects: action.payload.projects,
      };
    case GET_PLAN_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default planListReducer;
