import { reportListActionType } from "../../action/reportList";
import { GET_REPORT_LIST_FAILURE, GET_REPORT_LIST_SUCCESS, PAGE } from "../../action/reportList/interface";
import ReportListState from "./interface";

const initState: ReportListState = {
  page: 1,
  totalPage: 0,
  totalAmount: 0,
  projects: [],
  error: null,
};

const reportListReducer = (state: ReportListState = initState, action: reportListActionType): ReportListState => {
  switch (action.type) {
    case GET_REPORT_LIST_SUCCESS:
      return{
        ...state,
        totalPage: action.payload.total_page,
        totalAmount: action.payload.total_amount,
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