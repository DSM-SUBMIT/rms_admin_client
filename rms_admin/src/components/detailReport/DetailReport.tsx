import React from 'react';
import * as S from './style';
import Header from '../header/Header';
import ReportFirstPage from './ReportFirstPage';
import WritedReport from './WritedReport';
import { BTN, VIDEODOWNLOAD } from '../../constance/detailReport';
import { video } from '../../asset/detailReport';

const DetailReport = () => {
  return (
    <S.DetailReport>
      <Header />
      <div>
        <ReportFirstPage />
        <WritedReport isSecondPage />
        <WritedReport />
      </div>
      <S.BtnLine>
        <S.VideoImg src={video} />
        <S.VideoDownload>{VIDEODOWNLOAD}</S.VideoDownload>
        {BTN.map(data => {
          return (
            <S.Btn key={data.id}>
              <p>{data.content}</p>
            </S.Btn>
          );
        })}
      </S.BtnLine>
    </S.DetailReport>
  );
};

export default DetailReport;
