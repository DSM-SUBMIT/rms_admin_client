import React, { FC } from "react";
import ChangePasswordModal from "./changePassword/ChangePasswordModal";
import * as S from './style';

const Modal: FC = () => {
  return(
    <>
      <S.ModalWrapper>
        <ChangePasswordModal/>
      </S.ModalWrapper>
    </>
  )
}

export default Modal;