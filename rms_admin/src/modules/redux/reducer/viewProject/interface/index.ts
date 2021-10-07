import { CheckStateType, ProjectsType } from '../../../../../constance/viewProject';
import { error } from '../../../../../models/error';

interface ViewProjectState {
  currentPage: number;
  total_amount: number;
  projects: Array<ProjectsType>;
  total_page: number;
  error: error | null;
  field: CheckStateType;
  page: number;
  currentProjectId: number;
}


export default ViewProjectState;