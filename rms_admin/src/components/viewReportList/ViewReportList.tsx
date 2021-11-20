import React, { FC } from 'react';
import Report from './report';
import Header from '../header/Header';
import * as S from './style';
import Pagination from '../pagination/Pagination';
import { ReportType } from '../../models/dto/response/reportListResponse';

interface Props {
  page: number;
  projects: Array<ReportType>;
  totalPage: number;
  totalAmount: number;
  setPage: (payload: number) => void;
  setReportList: () => void;
}

const ViewReportList: FC<Props> = props => {
  const { page, projects, totalPage, setPage } = props;
  const childProps = {
    page,
    totalPage,
    setPage,
  };

  return (
    <>
      <Header />
      <S.ViewReportList>
        <S.ReportListWrapper>
          <S.TitleFont>승인 요청된 보고서</S.TitleFont>
          <S.ReportListContainer>
            {projects.length === 0 ? (
              <S.EmptyReport>보고서가 존재하지 않습니다.</S.EmptyReport>
            ) : (
              projects.map((v: ReportType, i: number) => {
                return <Report {...v} key={v.id} />;
              })
            )}
          </S.ReportListContainer>
          <Pagination {...childProps} />
        </S.ReportListWrapper>
      </S.ViewReportList>
    </>
  );
};

export default ViewReportList;
