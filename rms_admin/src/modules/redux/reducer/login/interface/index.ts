import { error } from '../../../../../models/error';

interface LoginState{
  id: string;
  password: string;
  error: error| null;
}

export default LoginState;