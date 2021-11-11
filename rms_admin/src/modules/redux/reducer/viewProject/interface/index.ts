import { CategoryStateType, ProjectsType } from '../../../../../constance/viewProject';
import { error } from '../../../../../models/error';

interface ViewProjectState {
  totalAmount: number;
  projects: Array<ProjectsType>;
  totalPage: number;
  error: error | null;
  field: CategoryStateType;
  page: number;
  currentProjectId: number;
  currentProjectTitle: string
}


export default ViewProjectState;