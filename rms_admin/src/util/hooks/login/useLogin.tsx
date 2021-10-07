import { useDispatch } from "react-redux";
import {
  getToken,
  refreshToken,
  setId,
  setPassword,
} from "../../../modules/redux/action/login";
import { useSelectState } from "../default";

const useLogin = () => {
  const dispatch = useDispatch();
  const state = useSelectState().login;
  const setState = {
    setId: (payload: string) => {
      dispatch(setId(payload));
    },
    setPassword: (payload: string) => {
      dispatch(setPassword(payload));
    },
    token: () => {
      dispatch(getToken());
    },
    refresh_token: () => {
      dispatch(refreshToken());
    },
  };
  return {
    state,
    setState,
  };
};

export default useLogin;
