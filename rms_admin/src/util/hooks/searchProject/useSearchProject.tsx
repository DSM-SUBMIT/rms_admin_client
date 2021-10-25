import { useDispatch } from "react-redux";
import { getSearchProject, setPage, setQuery } from "../../../modules/redux/action/searchProject";
import { useSelectState } from "../default";


const useSearchProject = () => {
  const dispatch = useDispatch();
  const state = useSelectState().searchProject;
  const setState = {
    setQuery: (payload: string) => {
      dispatch(setQuery(payload));
    },
    getSearchProject: () => {
      dispatch(getSearchProject());
    },
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    }
  }
  return {state, setState};
};

export default useSearchProject;