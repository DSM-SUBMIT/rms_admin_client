import { CategoryStateType, ProjectsType } from '../../../../../constance/viewProject';
import { error } from '../../../../../models/error';

interface ViewProjectState {
  totalAmount: number;
  projects: Array<ProjectsType>;
  totalPage: number;
  error: error | null;
  field: CategoryStateType;
  page: number;
}


export default ViewProjectState;