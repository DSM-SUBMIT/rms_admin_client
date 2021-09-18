import React from "react";
import * as S from "./style";
import { id, password } from "../../asset";

const Login = () => {
  return (
    <S.Login>
      <S.LoginWrapper>
        <S.Logo>RMS</S.Logo>
        <S.LoginInput>
          <img src={id} alt="id" />
          <input placeholder="아이디를 입력하세요" />
        </S.LoginInput>
        <S.PasswordInput>
          <img src={password} alt="password" />
          <input type="password" placeholder="비밀번호를 입력하세요" />
        </S.PasswordInput>
        <S.LoginButton>로그인</S.LoginButton>
      </S.LoginWrapper>
    </S.Login>
  );
};

export default Login;
