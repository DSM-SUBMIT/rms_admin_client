import { modalActionType } from '../../action/modal';
import {
  APPROVETYPE,
  FEEDBACK_FAILURE,
  FEEDBACK_SUCCESS,
  ID,
  MODAL_OFF,
  MODAL_ON,
  SET_COMMENT,
  SET_TYPE,
} from '../../action/modal/interface';
import ModalState from './interface';

const initState: ModalState = {
  type: '',
  postType: 'report',
  comment: '',
  isSuccessSaveFeedback: undefined,
  id: '',
  approveType: '',
};

const modalReducer = (state: ModalState = initState, action: modalActionType): ModalState => {
  switch (action.type) {
    case MODAL_ON: {
      return { ...state, type: action.payload };
    }
    case MODAL_OFF: {
      return { ...state, type: action.payload };
    }
    case FEEDBACK_SUCCESS:
      return {
        ...state,
        isSuccessSaveFeedback: true,
      };
    case FEEDBACK_FAILURE:
      return {
        ...state,
        isSuccessSaveFeedback: false,
      };
    case SET_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case SET_TYPE:
      return {
        ...state,
        postType: action.payload,
      };
    case ID:
      return {
        ...state,
        id: action.payload,
      };
    case APPROVETYPE:
      return {
        ...state,
        approveType: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default modalReducer;
