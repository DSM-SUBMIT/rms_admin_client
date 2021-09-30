import React, { useState } from 'react';
import * as S from './style';
import Header from '../header/Header';
import ReportFirstPage from './ReportFirstPage';
import WritedReport from './WritedReport';
import { BTN, VIDEODOWNLOAD } from '../../constance/detailReport';
import { video } from '../../asset/detailReport';
import FeedbackModal from '../modal/feedback';

const DetailReport = () => {
  const [isFeedbackModalClick, setIsFeedbackModalClick] = useState<boolean>(false);

  const feedbackBtnClickHandler = () => {
    setIsFeedbackModalClick(true);
  };

  return (
    <S.DetailReport>
      {isFeedbackModalClick && <FeedbackModal setClose={setIsFeedbackModalClick} />}
      <Header />
      <S.Pages>
        <ReportFirstPage />
        <WritedReport isSecondPage />
        <WritedReport />
      </S.Pages>
      <S.BtnLine>
        <S.VideoImg src={video} />
        <S.VideoDownload>{VIDEODOWNLOAD}</S.VideoDownload>
        {BTN.map(data => {
          return (
            <S.Btn
              key={data.id}
              onClick={data.id === 'approve' ? feedbackBtnClickHandler : () => {}}
            >
              <p>{data.content}</p>
            </S.Btn>
          );
        })}
      </S.BtnLine>
    </S.DetailReport>
  );
};

export default DetailReport;
