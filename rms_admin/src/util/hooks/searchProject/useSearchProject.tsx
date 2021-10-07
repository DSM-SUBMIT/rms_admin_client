import { useDispatch } from "react-redux";
import { getSearchProject, getSearching, setPage } from "../../../modules/redux/action/searchProject";
import { useSelectState } from "../default";


const useSearchProject = () => {
  const dispatch = useDispatch();
  const state = useSelectState().searchProject;
  const setState = {
    getSearchProject: () => {
      dispatch(getSearchProject());
    },
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    },
    getSearching: (payload: string) => {
      dispatch(getSearching(payload))
    }
  }
  return {state, setState};
};

export default useSearchProject;