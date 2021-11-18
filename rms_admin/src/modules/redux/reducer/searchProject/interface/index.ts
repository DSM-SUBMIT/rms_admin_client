import { ProjectType } from '../../../../../constance/serchProject';
import { error } from '../../../../../models/error';

interface SearchProjectState{
  totalPage: number;
  totalAmount: number;
  error: error | null;
  query: string;
  page: number;
  projects: Array<ProjectType>;
  currentProjectId: number;
  currentProjectTitle: string;
  currentProjectDocsUrl: string;
  currentProjectGitUrl: string;
  currentProjectServiceUrl: string;
}

export default SearchProjectState;