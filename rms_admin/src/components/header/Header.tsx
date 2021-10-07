import React, { useEffect } from 'react';
import * as S from './style';
import { profile } from '../../asset';
import { useModal } from '../../util/hooks/modal';
import { useLogin } from '../../util/hooks/login';
import { REFRESH_TOKEN } from '../../modules/redux/action/login/interface';
import moment from 'moment';
import { useHistory } from 'react-router';

const Header = () => {
  const { setState } = useModal();
  const loginState = useLogin();
  const history = useHistory();
  const { error } = loginState.state;

  useEffect(() => {
    if (
      moment(localStorage.getItem('access_token_expiration_time')).diff(moment()) <= 0 &&
      localStorage.getItem('refresh_token')
    ) {
      loginState.setState.refresh_token();
    }
  });

  useEffect(() => {
    if ((error?.statusCode === 401 && error.type === REFRESH_TOKEN) || (!localStorage.getItem('refresh_token') && !localStorage.getItem('access_token'))) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      alert('로그인 후 이용해주세요.');
      history.push('/');
    }
  }, [error]);

  const onClickChangePasswordModal = () => {
    setState.setModalOn('changePassword');
  };

  return (
    <S.Header>
      <S.Center>
        <S.Logo>RMS</S.Logo>
        <S.Nav>
          <span>계획서</span>
          <span>보고서</span>
          <span>승인된 프로젝트</span>
          <S.Profile onClick={onClickChangePasswordModal}>
            <img src={profile} alt='profile' />
            <span>비밀번호 변경</span>
          </S.Profile>
        </S.Nav>
      </S.Center>
    </S.Header>
  );
};

export default Header;
