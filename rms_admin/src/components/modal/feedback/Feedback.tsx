import React, { FC } from 'react';
import { closeModalIcon } from '../../../asset';
import * as S from './style';

interface Props {
  setClose: (value: React.SetStateAction<boolean>) => void;
}

const FeedbackModal: FC<Props> = ({ setClose }) => {
  const closeModalClickHandler = () => {
    setClose(false);
  };

  return (
    <>
      <S.ModalWrapper>
        <S.Modal>
          <S.CloseModalIcon
            src={closeModalIcon}
            alt='closeModal'
            onClick={closeModalClickHandler}
          />
          <S.TitleFont>해당 보고서의 피드백 내용을 적어주세요</S.TitleFont>
          <S.FeedbackInput />
          <S.CheckButtonWrapper>
            <S.CheckButton>미승인</S.CheckButton>
            <S.CheckButton>승인</S.CheckButton>
          </S.CheckButtonWrapper>
        </S.Modal>
      </S.ModalWrapper>
    </>
  );
};

export default FeedbackModal;
