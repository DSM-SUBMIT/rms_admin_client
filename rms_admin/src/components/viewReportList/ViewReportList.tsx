import React, { FC } from 'react';
import Report from './report';
import Header from '../header/Header';
import * as S from './style';
import Pagination from '../pagination/Pagination';
import { ReportType } from '../../models/dto/response/reportListResponse';

interface Props {
  page: number;
  projects: Array<ReportType>;
  total_page: number;
  total_amount: number;
  setPage: (payload: number) => void;
  setReportList: () => void;
}

const ViewReportList: FC<Props> = props => {
  const { page, projects, total_page, setPage } = props;
  const childProps = {
    page,
    total_page,
    setPage,
  };

  return (
    <>
      <Header />
      <S.ViewReportList>
        <S.ReportListWrapper>
          <S.TitleFont>승인 요청된 보고서</S.TitleFont>
          <S.ReportListContainer>
            {projects.map((v: ReportType, i: number) => {
              return <Report {...v} key={v.id} />;
            })}
          </S.ReportListContainer>
          <Pagination {...childProps} />
        </S.ReportListWrapper>
      </S.ViewReportList>
    </>
  );
};

export default ViewReportList;
