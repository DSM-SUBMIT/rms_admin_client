import { ProjectsType } from '../../../../../constance/serchProject';
import { error } from '../../../../../models/error';

interface SearchProjectState{
  total_page: number;
  total_amount: number;
  error: error | null;
  projects: Array<ProjectsType>;
}

export default SearchProjectState;