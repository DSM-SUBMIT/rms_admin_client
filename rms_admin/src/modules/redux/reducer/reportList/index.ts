import { reportListActionType } from "../../action/reportList";
import { GET_REPORT_LIST_FAILURE, GET_REPORT_LIST_SUCCESS, PAGE } from "../../action/reportList/interface";
import ReportListState from "./interface";

const initState: ReportListState = {
  page: 1,
  total_page: 0,
  total_amount: 0,
  projects: [],
  error: null,
};

const reportListReducer = (state: ReportListState = initState, action: reportListActionType): ReportListState => {
  switch (action.type) {
    case GET_REPORT_LIST_SUCCESS:
      return{
        ...state,
        total_page: action.payload.total_page,
        total_amount: action.payload.total_amount,
        projects: action.payload.projects,
      };
    case GET_REPORT_LIST_FAILURE:
      return{
        ...state,
        error: action.payload,
      };
    case PAGE:
      return{
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default reportListReducer;