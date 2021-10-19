import React, { useEffect } from 'react';
import * as S from './style';
import { id, password } from '../../asset';
import { ID_INPUT, LOGIN, LOGO, PASSWORD_INPUT } from '../../constance/login';
import { useLogin } from '../../util/hooks/login';
import { useHistory } from 'react-router';

const Login = () => {
  const { setState, state } = useLogin();
  const history = useHistory();

  useEffect(() => {
    if (state.isSuccessLogin) {
      history.push('view/plan-list');
      state.isSuccessLogin = false;
    }
  }, [state.isSuccessLogin]);

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setId(e.target.value);
  };

  const onChagePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setPassword(e.target.value);
  };

  const onClickLogin = () => {
    setState.token();
  };

  return (
    <S.Login>
      <S.LoginWrapper>
        <S.Logo>{LOGO}</S.Logo>
        <S.LoginInput>
          <img src={id} alt='id' />
          <input placeholder={ID_INPUT} onChange={onChangeId} />
        </S.LoginInput>
        <S.PasswordInput>
          <img src={password} alt='password' />
          <input type='password' placeholder={PASSWORD_INPUT} onChange={onChagePassword} />
        </S.PasswordInput>
        <S.ErrorMessage>{state.error?.statusCode === 401 ? '로그인 실패' : null}</S.ErrorMessage>
        <S.LoginButton onClick={onClickLogin}>{LOGIN}</S.LoginButton>
      </S.LoginWrapper>
    </S.Login>
  );
};

export default Login;
