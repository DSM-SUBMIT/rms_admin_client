import { useDispatch } from "react-redux";
import { getSearchProject, setPage } from "../../../modules/redux/action/searchProject";
import { useSelectState } from "../default";


const useSearchProject = () => {
  const dispatch = useDispatch();
  const state = useSelectState().searchProject;
  const setState = {
    getSearchProject: (payload: string) => {
      dispatch(getSearchProject(payload));
    },
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    }
  }
  return {state, setState};
};

export default useSearchProject;