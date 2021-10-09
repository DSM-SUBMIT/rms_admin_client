import { viewProjectActionType } from '../../action/viewProject';
import {
  GET_VIEW_PROJECT_SUCCESS,
  GET_VIEW_PROJECT_FAILURE,
  FIELD,
  PAGE,
  CURRENTPROJECTID
} from '../../action/viewProject/interface';
import ViewProjectState from './interface';

const initState: ViewProjectState= {
  total_amount: 1,
  projects: [],
  total_page: 1,
  error: null,
  currentPage: 1,
  field: {
    web: false,
    app: false,
    game: false,
    embedded: false,
    security: false,
    aiAndBigData: false,
  },
  page: 1,
  currentProjectId: 1
};

const viewProjectReducer = (state: ViewProjectState = initState, action: viewProjectActionType) => {
  switch (action.type) {
    case GET_VIEW_PROJECT_SUCCESS:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        projects: action.payload.projects,
        total_page: action.payload.total_Page,
      };
    case GET_VIEW_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FIELD:
      return {
        ...state,
        field: {
          web: action.payload.web,
          app: action.payload.app,
          game: action.payload.game,
          embedded: action.payload.embedded,
          security: action.payload.security,
          ai: action.payload.aiAndBigData,
        },
      };
    case CURRENTPROJECTID:
      return {
        ...state,
        currentProjectId: action.payload,
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

export default viewProjectReducer;