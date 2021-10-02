import React from "react";
import * as S from "./style";
import { id, password } from "../../asset";
import { ID_INPUT, LOGIN, LOGO, PASSWORD_INPUT } from "../../constance/login";
import { useLogin } from "../../util/hooks/login";

const Login = () => {
  const { setState, state } = useLogin();

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setId(e.target.value);
  };

  const onChagePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState.setPassword(e.target.value);
  };

  const onClickLogin = () => {
    setState.token({
      id: state.id,
      password: state.password,
    });
  };

  return (
    <S.Login>
      <S.LoginWrapper>
        <S.Logo>{LOGO}</S.Logo>
        <S.LoginInput>
          <img src={id} alt="id" />
          <input placeholder={ID_INPUT} onChange={onChangeId} />
        </S.LoginInput>
        <S.PasswordInput>
          <img src={password} alt="password" />
          <input
            type="password"
            placeholder={PASSWORD_INPUT}
            onChange={onChagePassword}
          />
        </S.PasswordInput>
        <S.LoginButton onClick={onClickLogin}>{LOGIN}</S.LoginButton>
      </S.LoginWrapper>
    </S.Login>
  );
};

export default Login;
