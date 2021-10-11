import { detailPlanActionType } from '../../action/plan';
import { GET_DETAIL_PLAN_FAILURE, GET_DETAIL_PLAN_SUCCESS, ID } from '../../action/plan/interface';
import DetailPlanState from './interface';

const initState: DetailPlanState = {
  projectId: 0,
  projectName: '',
  projectType: '',
  isIndividual: false,
  writer: '',
  writerNumber: 0,
  member: [],
  fields: [],
  plan: {
    goal: '',
    content: '',
    startDate: '',
    endDate: '',
    includes: {
      resultReport: false,
      code: false,
      outcome: false,
      others: false,
    },
  },
  id: '',
  error: null,
};

const detailPlanReducer = (
  state: DetailPlanState = initState,
  action: detailPlanActionType,
): DetailPlanState => {
  switch (action.type) {
    case GET_DETAIL_PLAN_SUCCESS:
      return {
        ...state,
        projectId: action.payload.project_id,
        projectName: action.payload.project_name,
        projectType: action.payload.project_type,
        isIndividual: action.payload.is_individual,
        writer: action.payload.writer,
        writerNumber: action.payload.writer_number,
        member: action.payload.members,
        fields: action.payload.fields,
        plan: {
          goal: action.payload.plan.goal,
          content: action.payload.plan.content,
          startDate: action.payload.plan.start_date,
          endDate: action.payload.plan.end_date,
          includes: {
            resultReport: action.payload.plan.includes.result_report,
            code: action.payload.plan.includes.code,
            outcome: action.payload.plan.includes.outcome,
            others: action.payload.plan.includes.others,
          },
        },
      };
    case GET_DETAIL_PLAN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default detailPlanReducer;
