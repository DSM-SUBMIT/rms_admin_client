import styled from "styled-components";
import { color } from "../../../../style";

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(107, 107, 107, 0.58);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
`;

export const ChangePasswordModal = styled.div`
  position: relative;
  width: 450px;
  height: 340px;
  background-color: white;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CloseModalIcon = styled.img`
  width: 15px;
  position: absolute;
  right: 0;
  margin: 15px 15px 0px 0px;
  cursor: pointer;
`;

export const TitleFont = styled.p`
  margin-top: 15px;
  font-size: 20px;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const PasswordInputWrapper = styled.div`
  width: 250px;
`;

export const PasswordTitleFont = styled.p`
  font-size: 12px;
  margin-top: 10px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 5px;
  height: 30px;
  border: 1px solid #E5E5E5;
  padding-left: 10px;
`;

export const CheckButton = styled.button`
  width: 150px;
  height: 30px;
  color: white;
  background-color: ${color.main};
  border-radius: 5px;
  border: none;
  margin-top: 30px;
  cursor: pointer;
`