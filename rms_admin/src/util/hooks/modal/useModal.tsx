import { useDispatch } from "react-redux"
import { setModalOff, setModalOn } from "../../../modules/redux/action/modal";
import { useSelectState } from "../default";


const useModal = () => {
  const dispatch = useDispatch();
  const state = useSelectState().modal;
  const setState = {
    setModalOff: (payload: string) => {
      dispatch(setModalOff(payload));
    },
    setModalOn: (payload: string) => {
      dispatch(setModalOn(payload));
    }
  }
  return {
    state,
    setState,
  };
};

export default useModal;