import { useDispatch } from 'react-redux';
import { CheckStateType } from '../../../constance/viewProject';
import { setField, setPage } from '../../../modules/redux/action/viewProject';
import { useSelectState } from '../default';

const useViewProject = () => {
  const dispatch = useDispatch();
  const state = useSelectState().viewProject;
  const setState = {
    setField: (payload: CheckStateType) => {
      dispatch(setField(payload));
    },
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    },
  };
  return { state, setState };
};

export default useViewProject;