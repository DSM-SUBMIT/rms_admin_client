import { changePasswordActionType } from "../../action/changePassword";
import { CHANGE_PASSWORD_FAILURE, CHANGE_PASSWORD_SUCCESS, CHECK_PASSWORD, IS_CHANGE_PASSWORD, NEW_PASSWORD, OLD_PASSWORD } from "../../action/changePassword/interface";
import ChangePasswordState from "./interface";

const initState: ChangePasswordState = {
  oldPassword: "",
  newPassword: "",
  checkPassword: "",
  error: {
    type: "",
    statusCode: 0,
    message: "",
  },
  isSuccessChangePassword: null,
};

const changePasswordReducer = (
  state: ChangePasswordState = initState,
  action: changePasswordActionType
): ChangePasswordState => {
  switch (action.type) {
    case OLD_PASSWORD:
      return{
        ...state,
        oldPassword: action.payload,
      };
    case NEW_PASSWORD:
      return{
        ...state,
        newPassword: action.payload,
      }
    case CHECK_PASSWORD:
      return{
        ...state,
        checkPassword: action.payload,
      }
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isSuccessChangePassword: 'false',
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isSuccessChangePassword: 'true',
      };
    case IS_CHANGE_PASSWORD:
      return {
        ...state,
        isSuccessChangePassword: null,
      }
    default:
      return state;
  }
};

export default changePasswordReducer;