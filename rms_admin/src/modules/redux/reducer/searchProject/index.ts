import SearchProjectState from './interface';
import { searchProjectActionType } from '../../action/searchProject';
import {
  GET_SEARCH_PROJECT_FAILURE,
  GET_SEARCH_PROJECT_SUCCESS,
  PAGE
} from '../../action/searchProject/interface';

const initState: SearchProjectState = {
  page: 1,
  total_page: 1,
  total_amount: 0,
  projects: [],
  query: "",
  error: null,
};

const searchProjectReducer = (state: SearchProjectState = initState, action: searchProjectActionType): SearchProjectState => {
  switch (action.type) {
    case GET_SEARCH_PROJECT_SUCCESS:
      return {
        ...state,
        total_page: action.payload.total_page,
        total_amount: action.payload.total_amount,
        projects: action.payload.projects
      };
    case GET_SEARCH_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case PAGE:
      return {
        ...state,
        page: action.payload,
      }
    default:
      return state;
  }
};

export default searchProjectReducer;
