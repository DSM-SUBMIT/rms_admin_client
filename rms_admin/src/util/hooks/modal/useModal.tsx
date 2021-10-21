import { useDispatch } from 'react-redux';
import {
  setComment,
  setModalOff,
  setModalOn,
  setType,
  id,
  setApproveType,
} from '../../../modules/redux/action/modal';
import { useSelectState } from '../default';

const useModal = () => {
  const dispatch = useDispatch();
  const state = useSelectState().modal;
  const setState = {
    setModalOff: (payload: string) => {
      dispatch(setModalOff(payload));
    },
    setModalOn: (payload: string) => {
      dispatch(setModalOn(payload));
    },
    setType: (payload: string) => {
      dispatch(setType(payload));
    },
    setComment: (payload: string) => {
      dispatch(setComment(payload));
    },
    setId: (payload: string) => {
      dispatch(id(payload));
    },
    setApproveType: (payload: string) => {
      dispatch(setApproveType(payload));
    },
  };
  return {
    state,
    setState,
  };
};

export default useModal;
