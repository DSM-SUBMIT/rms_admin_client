import { useDispatch } from "react-redux";
import { getPlanList, setPage } from "../../../modules/redux/action/planList";
import { useSelectState } from "../default";

const usePlanList = () => {
  const dispatch = useDispatch();
  const state = useSelectState().planList;
  const setState = {
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    },
    setPlanList: () => {
      dispatch(getPlanList());
    }
  }
  return {state, setState};
};

export default usePlanList;