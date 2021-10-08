import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { closeModalIcon } from '../../../asset';
import { setType } from '../../../modules/redux/action/modal';
import { FEEDBACK } from '../../../modules/redux/action/modal/interface';
import { useModal } from '../../../util/hooks/modal';
import * as S from './style';

interface Props {
  type: string;
  setClose: (value: React.SetStateAction<boolean>) => void;
}

const FeedbackModal: FC<Props> = ({ setClose, type }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { state, setState } = useModal();
  const id = useLocation().pathname;

  useEffect(() => {
    setType(type);
    if (type === 'report') setState.setId(id.slice(28));
    else if (type === 'plan') setState.setId(id.slice(26));
  }, [type]);

  const closeModalClickHandler = () => {
    setClose(false);
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState.setComment(event.target.value);
  };

  const approveBtnClickHandler = () => {
    setClose(false);
    setState.setApproveType('approve');
    dispatch({ type: FEEDBACK });
  };

  const disApproveBtnClickHandler = () => {
    setClose(false);
    setState.setApproveType('deny');
    dispatch({ type: FEEDBACK });
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
          <S.TitleFont>
            해당 {type === 'report' ? '보고서' : '계획서'}의 피드백 내용을 적어주세요
          </S.TitleFont>
          <S.FeedbackInput onChange={inputChangeHandler} />
          <S.CheckButtonWrapper>
            <S.CheckButton onClick={disApproveBtnClickHandler}>미승인</S.CheckButton>
            <S.CheckButton onClick={approveBtnClickHandler}>승인</S.CheckButton>
          </S.CheckButtonWrapper>
        </S.Modal>
      </S.ModalWrapper>
    </>
  );
};

export default FeedbackModal;
