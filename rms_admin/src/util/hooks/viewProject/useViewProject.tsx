import { useDispatch } from 'react-redux';
import { CategoryStateType } from '../../../constance/viewProject';
import { setField, setPage, setCurrentProjectId } from '../../../modules/redux/action/viewProject';
import ViewProjectState from '../../../modules/redux/reducer/viewProject/interface';
import { useSelectState } from '../default';

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
  };
  return { state, setState };
};

export default useViewProject;