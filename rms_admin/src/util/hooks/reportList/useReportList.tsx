import { useDispatch } from 'react-redux';
import { getReportList, setPage } from '../../../modules/redux/action/reportList';
import { useSelectState } from '../default';

const useReportList = () => {
  const dispatch = useDispatch();
  const state = useSelectState().reportList;
  const setState = {
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    },
    setReportList: () => {
      dispatch(getReportList());
    },
  };
  return { state, setState };
};

export default useReportList;