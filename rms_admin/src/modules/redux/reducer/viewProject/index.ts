import { viewProjectActionType } from '../../action/viewProject';
import {
  GET_VIEW_PROJECT_SUCCESS,
  GET_VIEW_PROJECT_FAILURE,
  FIELD,
  PAGE,
  CURRENTPROJECTID,
  CURRENTPROJECTTITLE
} from '../../action/viewProject/interface';
import ViewProjectState from './interface';

const initState: ViewProjectState= {
  totalAmount: 1,
  projects: [],
  totalPage: 1,
  error: null,
  currentProjectTitle: "",
  currentProjectId: 1,
  field: {
    web: false,
    app: false,
    game: false,
    embedded: false,
    aiAndBigData: false,
    security: false,
  },
  page: 1
};

const viewProjectReducer = (state: ViewProjectState = initState, action: viewProjectActionType) => {
  switch (action.type) {
    case GET_VIEW_PROJECT_SUCCESS:
      return {
        ...state,
        projects: action.payload.projects,
        totalPage: action.payload.total_page,
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
          aiAndBigData: action.payload.aiAndBigData,
          security: action.payload.security,
        },
      };
    case CURRENTPROJECTID:
      return {
        ...state,
        currentProjectId: action.payload,
      };
    case CURRENTPROJECTTITLE:
      return {
        ...state,
        currentProjectTitle: action.payload
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