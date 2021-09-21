import React, { FC } from "react";
import { closeModalIcon } from "../../../asset";
import * as S from "../style";

const ChangePasswordModal: FC = () => {
  return (
    <>
      <S.ChangePasswordModal>
        <S.CloseModalIcon src={closeModalIcon} alt="closeModal" />
        <S.TitleFont>비밀번호 변경</S.TitleFont>
        <S.PasswordInputWrapper>
          <S.PasswordTitleFont>현재 비밀번호</S.PasswordTitleFont>
          <S.PasswordInput type="password" />
          <S.PasswordTitleFont>새 비밀번호</S.PasswordTitleFont>
          <S.PasswordInput
            placeholder="8~16자리로 입력해주세요."
            type="password"
          />
          <S.PasswordTitleFont>비밀번호 확인</S.PasswordTitleFont>
          <S.PasswordInput type="password" />
        </S.PasswordInputWrapper>
        <S.CheckButton>변경하기</S.CheckButton>
      </S.ChangePasswordModal>
    </>
  );
};

export default ChangePasswordModal;
