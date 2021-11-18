import { useDispatch } from 'react-redux';
import { CategoryStateType } from '../../../constance/viewProject';
import ViewProjectState from '../../../modules/redux/reducer/viewProject/interface';
import { useSelectState } from '../default';
import {
  setField,
  setPage,
  setCurrentProjectId,
  setCurrentProjectTitle,
  setCurrentProjectDocsUrl,
  setCurrentProjectGitUrl,
  setCurrentProjectServiceUrl
} from '../../../modules/redux/action/viewProject';


const useViewProject = () => {
  const dispatch = useDispatch();
  const state:ViewProjectState = useSelectState().viewProject;
  const setState = {
    setField: (payload: CategoryStateType) => {
      dispatch(setField(payload));
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
  };
  return { state, setState };
};

export default useViewProject;