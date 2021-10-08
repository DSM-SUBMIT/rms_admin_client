import PlanListState from './interface';
import { planListActionType } from '../../action/planList';
import {
  GET_PLAN_LIST_FAILURE,
  GET_PLAN_LIST_SUCCESS,
  PAGE,
} from '../../action/planList/interface';
import { PlanResponseType, PlanType } from '../../../../models/dto/response/planListResponse';

const initState: PlanListState = {
  page: 1,
  totalPage: 1,
  totalAmount: 0,
  projects: [],
  error: null,
};

const planListReducer = (
  state: PlanListState = initState,
  action: planListActionType,
): PlanListState => {
  switch (action.type) {
    case GET_PLAN_LIST_SUCCESS:
      let projectList: Array<PlanType> = [];
      action.payload.projects.forEach((element: PlanResponseType) => {
        let project: PlanType = {
          id: 0,
          projecType: '',
          isIndividual: false,
          title: '',
          teamName: '',
          fields: [],
        };
        project.id = element.id;
        project.fields = element.fields;
        project.isIndividual = element.is_individual;
        project.projecType = element.project_type;
        project.teamName = element.team_name;
        project.title = element.title;
        projectList.push(project);
      });
      return {
        ...state,
        totalPage: action.payload.total_page,
        totalAmount: action.payload.total_amount,
        projects: projectList,
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
