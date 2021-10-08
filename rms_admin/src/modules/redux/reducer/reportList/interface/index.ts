import { ReportType } from '../../../../../models/dto/response/reportListResponse';
import { error } from '../../../../../models/error';

interface ReportListState {
  page: number;
  totalPage: number;
  totalAmount: number;
  error: error | null;
  projects: Array<ReportType>;
}

export default ReportListState;
