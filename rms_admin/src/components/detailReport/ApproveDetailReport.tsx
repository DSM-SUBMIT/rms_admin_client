import React, { FC, useState } from 'react';
import * as S from './style';
import Header from '../header/Header';
import ReportFirstPage from './ReportFirstPage';
import WritedReport from './WritedReport';
import { APPROVEBTN, VIDEODOWNLOAD } from '../../constance/detailReport';
import { video } from '../../asset/detailReport';
import FeedbackModal from '../modal/feedback';

interface Props {
  content: string;
  field: Array<string>;
  writer: string;
  videoUrl: string;
}

const ApproveDetailReport: FC<Props> = props => {
  const { content, field, writer, videoUrl } = props;
  const [isFeedbackModalClick, setIsFeedbackModalClick] = useState<boolean>(false);

  const feedbackBtnClickHandler = () => {
    setIsFeedbackModalClick(true);
  };

  const videoDownloadBtnClickHandler = () => {
    window.location.href = videoUrl;
  };

  return (
    <S.DetailReport>
      {isFeedbackModalClick && <FeedbackModal setClose={setIsFeedbackModalClick} />}
      <Header />
      <S.Pages>
        <ReportFirstPage field={field} writer={writer} />
        <WritedReport isSecondPage content={content} />
        <WritedReport content={content} />
      </S.Pages>
      <S.BtnLine>
        <div>
          <S.VideoImg src={video} onClick={videoDownloadBtnClickHandler} />
          <S.VideoDownload onClick={videoDownloadBtnClickHandler}>{VIDEODOWNLOAD}</S.VideoDownload>
        </div>
        <div>
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
        </div>
      </S.BtnLine>
    </S.DetailReport>
  );
};

export default ApproveDetailReport;
