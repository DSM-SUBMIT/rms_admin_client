import React, { useEffect } from 'react';
import * as S from './style';
import { profile } from '../../asset';
import { useModal } from '../../util/hooks/modal';
import { useLogin } from '../../util/hooks/login';
import { REFRESH_TOKEN } from '../../modules/redux/action/login/interface';
import moment from 'moment';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Header = () => {
  const { setState } = useModal();
  const loginState = useLogin();
  const history = useHistory();
  const { error } = loginState.state;

  useEffect(() => {
    if (error?.statusCode === 401 && error.type === REFRESH_TOKEN) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('access_token_expiration_time');
      history.replace('/');
    }
  }, [loginState.state.error]);

  useEffect(() => {
    if (
      moment(localStorage.getItem('access_token_expiration_time')).diff(moment()) <= 0 &&
      localStorage.getItem('refresh_token')
    ) {
      loginState.setState.refresh_token();
    }
  }, []);

  const onClickChangePasswordModal = () => {
    setState.setModalOn('changePassword');
  };

  return (
    <S.Header>
      <S.Center>
        <S.Logo>
          <Link to='/view/plan-list'>RMS</Link>
        </S.Logo>
        <S.Nav>
          <span>
            <Link to='/view/plan-list'>계획서</Link>
          </span>
          <span>
            <Link to='/view/report-list'>보고서</Link>
          </span>
          <span>
            <Link to='/view/project-list'>승인된 프로젝트</Link>
          </span>
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
