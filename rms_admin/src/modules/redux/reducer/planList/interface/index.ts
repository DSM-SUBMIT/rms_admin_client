import { PlanType } from '../../../../../models/dto/response/planListResponse';
import { error } from '../../../../../models/error';

interface PlanListState{
  page: number;
  total_page: number;
  total_amount: number;
  error: error | null;
  projects: Array<PlanType>;
}

export default PlanListState;