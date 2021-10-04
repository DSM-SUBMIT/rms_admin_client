import { modalActionType } from "../../action/modal";
import { MODAL_OFF, MODAL_ON } from "../../action/modal/interface";
import ModalState from "./interface";

const initState: ModalState = {
  type: '',
};

const modalReducer = (state: ModalState = initState, action: modalActionType)=>{
  switch(action.type){
    case MODAL_ON: {
      return { ...state, type: action.payload };
    }
    case MODAL_OFF: {
      return { ...state, type: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;