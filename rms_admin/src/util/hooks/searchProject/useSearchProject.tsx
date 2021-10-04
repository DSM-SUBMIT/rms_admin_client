import { useDispatch } from "react-redux";
import { getSearchProject } from "../../../modules/redux/action/searchProject";
import { useSelectState } from "../default";


const useSearchProject = () => {
  const dispatch = useDispatch();
  const state = useSelectState().searchProject;
  const setState = {
    setSearchProject: () => {
      dispatch(getSearchProject());
    }
  }
  return {state, setState};
};

export default useSearchProject;