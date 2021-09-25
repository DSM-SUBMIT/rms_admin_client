import styled from "styled-components";

export const Login = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
  width: 440px;
  height: 300px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  margin-top: 35px;
  font-size: 25px;
  color: #386bee;
  font-weight: 700;
`;

export const LoginInput = styled.div`
  width: 260px;
  height: 35px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  border: 1px solid #e5e5e5;

  & img {
    margin-left: 15px;
  }

  & input {
    border: none;
    background-color: #f7f9fd;
    font-size: 13px;
    color: #b1b1b1;
    margin-left: 10px;
  }
`;

export const PasswordInput = styled.div`
  width: 260px;
  height: 35px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  border: 1px solid #e5e5e5;

  & img {
    margin-left: 15px;
  }

  & input {
    border: none;
    background-color: #f7f9fd;
    font-size: 13px;
    color: #b1b1b1;
    margin-left: 10px;
  }
`;

export const LoginButton = styled.button`
  width: 260px;
  height: 50px;
  color: white;
  background-color: #386bee;
  border: none;
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;
