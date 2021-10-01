import { loginActionType } from "../../action/login";
import {
  ID,
  PASSWORD,
  TOKEN_FAILURE,
} from "../../action/login/interface";
import LoginState from "./interface";

const initState: LoginState = {
  id: "",
  password: "",
  error: null,
};

const loginReducer = (
  state: LoginState = initState,
  action: loginActionType
): LoginState => {
  switch (action.type) {
    case ID:
      return {
        ...state,
        id: action.payload,
      };
    case PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case TOKEN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;