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
  currentProjectTitle: string;
  currentProjectDocsUrl: string;
  currentProjectServiceUrl: string;
  currentProjectGitUrl: string;
}


export default ViewProjectState;