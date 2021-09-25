import React from "react";
import * as S from "./style";
import { id, password } from "../../asset";
import { ID_INPUT, LOGIN, LOGO, PASSWORD_INPUT } from "../../constance/login";

const Login = () => {
  return (
    <S.Login>
      <S.LoginWrapper>
        <S.Logo>{LOGO}</S.Logo>
        <S.LoginInput>
          <img src={id} alt="id" />
          <input placeholder={ID_INPUT} />
        </S.LoginInput>
        <S.PasswordInput>
          <img src={password} alt="password" />
          <input type="password" placeholder={PASSWORD_INPUT} />
        </S.PasswordInput>
        <S.LoginButton>{LOGIN}</S.LoginButton>
      </S.LoginWrapper>
    </S.Login>
  );
};

export default Login;
