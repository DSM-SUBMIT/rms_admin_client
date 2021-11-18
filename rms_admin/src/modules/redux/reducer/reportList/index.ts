import { ReportResponseType, ReportType } from '../../../../models/dto/response/reportListResponse';
import { reportListActionType } from '../../action/reportList';
import {
  GET_REPORT_LIST_FAILURE,
  GET_REPORT_LIST_SUCCESS,
  PAGE,
} from '../../action/reportList/interface';
import ReportListState from './interface';

const initState: ReportListState = {
  page: 1,
  totalPage: 1,
  totalAmount: 0,
  projects: [],
  error: null,
};

const reportListReducer = (
  state: ReportListState = initState,
  action: reportListActionType,
): ReportListState => {
  switch (action.type) {
    case GET_REPORT_LIST_SUCCESS:
      let reportList: Array<ReportType> = [];
      action.payload.projects.forEach((element: ReportResponseType) => {
        let report: ReportType = {
          id: 0,
          projectType: '',
          isIndividual: false,
          title: '',
          teamName: '',
          fields: [],
        };
        report.id = element.id;
        report.fields = element.fields;
        report.isIndividual = element.is_individual;
        report.projectType = element.project_type;
        report.teamName = element.team_name;
        report.title = element.title;
        reportList.push(report);
      });

      return {
        ...state,
        totalPage: action.payload.total_page,
        totalAmount: action.payload.total_amount,
        projects: reportList,
      };
    case GET_REPORT_LIST_FAILURE:
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

export default reportListReducer;
