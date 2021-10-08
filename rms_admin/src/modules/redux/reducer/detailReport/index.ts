import { detailReportActionType } from '../../action/detailReport';
import { GET_REPORT_SUCCESS, GET_REPORT_FAILURE, ID } from '../../action/detailReport/interface';
import DetailReportState from './interface';

const initState: DetailReportState = {
  content: '',
  projectName: '',
  writer: '',
  id: '',
  isIndividual: false,
  writerStdNumber: 1101,
  error: null,
};

const detailReportReducer = (
  state: DetailReportState = initState,
  action: detailReportActionType,
): DetailReportState => {
  switch (action.type) {
    case GET_REPORT_SUCCESS:
      return {
        ...state,
        id: String(action.payload.project_id),
        content: action.payload.report.content,
        projectName: action.payload.project_name,
        isIndividual: action.payload.is_individual,
        writerStdNumber: action.payload.writer_number,
        writer: action.payload.writer,
      };
    case GET_REPORT_FAILURE:
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

export default detailReportReducer;
