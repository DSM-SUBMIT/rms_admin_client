import { detailReportActionType } from '../../action/detailReport';
import { GET_REPORT_SUCCESS, GET_REPORT_FAILURE, ID } from '../../action/detailReport/interface';
import DetailReportState from './interface';

const initState: DetailReportState = {
  content: '',
  field: [],
  videoUrl: '',
  writer: '',
  id: '',
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
        content: action.payload.report.content,
        field: action.payload.field,
        videoUrl: action.payload.report.video_url,
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
