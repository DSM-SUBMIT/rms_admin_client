import SearchProjectState from './interface';
import { searchProjectActionType } from '../../action/searchProject';
import {
  GET_SEARCH_PROJECT_FAILURE,
  GET_SEARCH_PROJECT_SUCCESS,
  QUERY,
  PAGE,
  CURRENT_PROJECT_ID,
  CURRENT_PROJECT_TITLE,
  CURRENT_PROJECT_DOCS_URL,
  CURRENT_PROJECT_GIT_URL,
  CURRENT_PROJECT_SERVICE_URL
} from '../../action/searchProject/interface';

const initState: SearchProjectState = {
  page: 1,
  totalPage: 1,
  totalAmount: 0,
  projects: [],
  query: "",
  error: null,
  currentProjectTitle: "",
  currentProjectId: 1,
  currentProjectDocsUrl: "",
  currentProjectServiceUrl: "",
  currentProjectGitUrl: ""
};

const searchProjectReducer = (
  state: SearchProjectState = initState,
  action: searchProjectActionType
):SearchProjectState => {
  switch (action.type) {
    case GET_SEARCH_PROJECT_SUCCESS:
      return {
        ...state,
        totalAmount: action.payload.total_amount,
        projects: action.payload.projects,
        totalPage: action.payload.total_page,
      };
    case QUERY:
      return {
        ...state,
        query: action.payload
      }
    case GET_SEARCH_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case CURRENT_PROJECT_ID:
      return {
        ...state,
        currentProjectId: action.payload,
      };
    case CURRENT_PROJECT_TITLE:
      return {
        ...state,
        currentProjectTitle: action.payload
      };
    case CURRENT_PROJECT_SERVICE_URL:
      return {
        ...state,
        currentProjectServiceUrl: action.payload
      };
    case CURRENT_PROJECT_DOCS_URL:
      return {
        ...state,
        currentProjectDocsUrl: action.payload
      };
    case CURRENT_PROJECT_GIT_URL:
      return {
        ...state,
        currentProjectGitUrl: action.payload
      };
    default:
      return state;
  }
};

export default searchProjectReducer;