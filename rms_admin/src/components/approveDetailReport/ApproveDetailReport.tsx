import React, { useState } from 'react';
import * as S from './style';
import Header from '../header/Header';
import ReportFirstPage from './ReportFirstPage';
import WritedReport from './WritedReport';
import { APPROVEBTN, VIDEODOWNLOAD } from '../../constance/detailReport';
import { video } from '../../asset/detailReport';
import FeedbackModal from '../modal/feedback';

const ApproveDetailReport = () => {
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
        {APPROVEBTN.map(data => {
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

export default ApproveDetailReport;
