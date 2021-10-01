import { useDispatch } from 'react-redux';
import { loginRequest } from '../../../models/dto/request/loginRequest';
import { getToken, setId, setPassword } from '../../../modules/redux/action/login';
import { useSelectState } from '../default';

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
    getToken: (payload: loginRequest) => {
      dispatch(getToken());
    },
  };
  return {
    state,
    setState,
  };
};

export default useLogin;