import { loginActionType } from "../../action/login";
import {
  ERROR,
  ID,
  PASSWORD,
  REFRESH_TOKEN_FAILURE,
  TOKEN_FAILURE,
  TOKEN_SUCCESS,
} from "../../action/login/interface";
import LoginState from "./interface";

const initState: LoginState = {
  id: "",
  password: "",
  error: {
    type: "",
    statusCode: 0,
    message: "",
  },
  isSuccessLogin: false,
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
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TOKEN_SUCCESS:
      return {
        ...state,
        isSuccessLogin: true,
      }
    case TOKEN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessLogin: false,
      };
    case REFRESH_TOKEN_FAILURE:
      return{
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
