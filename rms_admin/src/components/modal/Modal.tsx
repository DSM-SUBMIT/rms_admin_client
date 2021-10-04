import { FC } from "react"
import { useModal } from "../../util/hooks/modal"
import ChangePasswordModal from "./changePassword";

const Modal:FC = (): any => {
  const { state, setState } = useModal();
  
  return(
    <>
      {state.type === 'changePassword' ? <ChangePasswordModal {...state} {...setState}/>: null}
    </>
  );
}

export default Modal;