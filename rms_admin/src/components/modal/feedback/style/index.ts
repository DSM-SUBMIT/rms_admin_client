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

export const Modal = styled.div`
  width: 650px;
  height: 430px;
  position: relative;
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
  font-size: 23px;
  font-weight: bold;
  margin-top: 50px;
`;

export const FeedbackInput = styled.textarea`
  width: 500px;
  height: 200px;
  resize: none;
  border: 1px solid #797979;
  border-radius: 5px;
  margin-top: 35px;
  padding: 8px;
`;

export const CheckButtonWrapper = styled.div`
  margin-top: 33px;
`

export const CheckButton = styled.button`
  width: 100px;
  height: 40px;
  background: ${color.main};
  border-radius: 44px;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 18px;

  & + &{
    margin-left: 20px;
  }
`;
