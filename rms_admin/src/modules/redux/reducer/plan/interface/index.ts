import { MemberType, PlanContentType } from '../../../../../models/dto/response/planResponse';
import { error } from '../../../../../models/error';

interface DetailPlanState {
  projectId: number;
  projectName: string;
  projectType: string;
  isIndividual: boolean;
  writer: string;
  writerNumber: number;
  member: Array<MemberType>;
  fields: Array<string>;
  plan: PlanContentType;
  id: string;
  error: error | null;
}

export default DetailPlanState;
