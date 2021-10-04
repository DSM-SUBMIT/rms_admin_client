import { useDispatch } from 'react-redux';
import {
  isChangePassword,
  passwordChange,
  setCheckPassword,
  setNewPassword,
  setOldPassword,
} from '../../../modules/redux/action/changePassword';
import { useSelectState } from '../default';

const useChangePassword = () => {
  const dispatch = useDispatch();
  const state = useSelectState().chagePassword;
  const setState = {
    setOldPassword: (payload: string) => {
      dispatch(setOldPassword(payload));
    },
    setNewPassword: (payload: string) => {
      dispatch(setNewPassword(payload));
    },
    setCheckPassword: (payload: string) => {
      dispatch(setCheckPassword(payload));
    },
    setPasswordSuccess: () => {
      dispatch(isChangePassword());
    },
    changePassword: () => {
      dispatch(passwordChange());
    },
  };
  return {
    state,
    setState,
  };
};

export default useChangePassword;
