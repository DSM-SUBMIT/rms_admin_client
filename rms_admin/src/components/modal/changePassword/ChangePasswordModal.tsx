import React, { FC, useEffect } from 'react';
import { closeModalIcon } from '../../../asset';
import { setModalOff } from '../../../modules/redux/action/modal';
import useChangePassword from '../../../util/hooks/changePassword/useChangePassword';
import * as S from './style';

interface Props {
  setModalOff: (payload: string) => void;
  setModalOn: (payload: string) => void;
  type: string;
}

const ChangePasswordModal: FC<Props> = props => {
  const { state, setState } = useChangePassword();

  useEffect(() => {
    switch (state.isSuccessChangePassword) {
      case null:
        return;
      case 'true':
        props.setModalOff('');
        setState.setPasswordSuccess();
        alert('비밀번호 변경완료');
        return;
      case 'false':
        if (state.error?.statusCode === 401) {
          alert('비밀번호가 틀렸습니다.');
        } else if (state.error?.statusCode === 409) {
          alert('현재 비밀번호와 새 비밀번호가 일치합니다.');
        }
        setState.setPasswordSuccess();
        return;
      default:
        return;
    }
  }, [state.isSuccessChangePassword]);

  const onClickCloseModal = () => {
    props.setModalOff('');
  };

  const onChangeOldPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setOldPassword(e.target.value);
  };

  const onChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setNewPassword(e.target.value);
  };

  const onChangeCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setCheckPassword(e.target.value);
  };

  const onClickChangePassword = () => {
    if (state.checkPassword !== state.newPassword) {
      alert('새 비밀번호와 비밀번호 확인이 다릅니다.');
      return;
    }
    if (state.newPassword.length > 16 || state.newPassword.length < 8) {
      alert('비밀번호를 8~16자리로 입력해주세요.');
      return;
    }
    setState.changePassword();
  };

  return (
    <>
      <S.ModalWrapper>
        <S.ChangePasswordModal>
          <S.CloseModalIcon src={closeModalIcon} alt='closeModal' onClick={onClickCloseModal} />
          <S.TitleFont>비밀번호 변경</S.TitleFont>
          <S.PasswordInputWrapper>
            <S.PasswordTitleFont>현재 비밀번호</S.PasswordTitleFont>
            <S.PasswordInput type='password' onChange={onChangeOldPassword} />
            <S.PasswordTitleFont>새 비밀번호</S.PasswordTitleFont>
            <S.PasswordInput
              placeholder='8~16자리로 입력해주세요.'
              type='password'
              onChange={onChangeNewPassword}
            />
            <S.PasswordTitleFont>비밀번호 확인</S.PasswordTitleFont>
            <S.PasswordInput type='password' onChange={onChangeCheckPassword} />
          </S.PasswordInputWrapper>
          <S.CheckButton onClick={onClickChangePassword}>변경하기</S.CheckButton>
        </S.ChangePasswordModal>
      </S.ModalWrapper>
    </>
  );
};

export default ChangePasswordModal;
