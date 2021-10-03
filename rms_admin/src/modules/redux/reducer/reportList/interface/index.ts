import { ReportType } from "../../../../../models/dto/response/reportListResponse";
import { error } from "../../../../../models/error";

interface ReportListState{
  page: number;
  total_page: number;
  total_amount: number;
  error: error| null;
  projects: Array<ReportType>;
}

export default ReportListState;