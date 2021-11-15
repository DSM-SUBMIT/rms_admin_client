import { useDispatch } from "react-redux";
import {
  getSearchProject,
  setPage,
  setQuery,
  setCurrentProjectId,
  setCurrentProjectTitle,
  setCurrentProjectDocsUrl,
  setCurrentProjectGitUrl,
  setCurrentProjectServiceUrl
} from "../../../modules/redux/action/searchProject";
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
    },
    setCurrentProjectId: (payload: number) => {
      dispatch(setCurrentProjectId(payload));
    },
    setCurrentProjectTitle: (payload: string) => {
      dispatch(setCurrentProjectTitle(payload));
    },
    setCurrentProjectDocsUrl: (payload: string) => {
      dispatch(setCurrentProjectDocsUrl(payload));
    },
    setCurrentProjectGitUrl: (payload: string) => {
      dispatch(setCurrentProjectGitUrl(payload));
    },
    setCurrentProjectServiceUrl: (payload: string) => {
      dispatch(setCurrentProjectServiceUrl(payload));
    }
  }
  return {state, setState};
};

export default useSearchProject;