import { PlanType } from '../../../../../models/dto/response/planListResponse';
import { error } from '../../../../../models/error';

interface PlanListState{
  page: number;
  totalPage: number;
  totalAmount: number;
  error: error | null;
  projects: Array<PlanType>;
}

export default PlanListState;