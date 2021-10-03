import React, { FC } from 'react';
import * as S from './style';
import Header from '../header/Header';
import ReportFirstPage from './ReportFirstPage';
import WritedReport from './WritedReport';
import { BTN, VIDEODOWNLOAD } from '../../constance/detailReport';
import { video } from '../../asset/detailReport';

interface Props {
  content: string;
  field: Array<string>;
  writer: string;
  videoUrl: string;
}

const DetailReport: FC<Props> = props => {
  const { content, field, writer, videoUrl } = props;

  const videoDownloadBtnClickHandler = () => {
    window.location.href = videoUrl;
  };

  return (
    <S.DetailReport>
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
          {BTN.map(data => {
            return (
              <S.Btn key={data.id}>
                <p>{data.content}</p>
              </S.Btn>
            );
          })}
        </div>
      </S.BtnLine>
    </S.DetailReport>
  );
};

export default DetailReport;
