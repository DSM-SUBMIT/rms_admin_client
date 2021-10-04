import { CheckStateType, ProjectsType } from '../../../../../constance/viewProject';
import { error } from '../../../../../models/error';

interface ViewProjectState {
  total_amount: number;
  projects: Array<ProjectsType>;
  total_page: number;
  error: error | null;
  field: CheckStateType;
  page: number;
}

export default ViewProjectState;