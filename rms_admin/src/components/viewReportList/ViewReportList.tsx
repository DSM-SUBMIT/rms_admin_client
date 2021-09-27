import React, { FC } from "react";
import Report from "./report";
import Header from '../header/Header';
import * as S from "./style";
import Pagination from "../pagination/Pagination";

const ViewReportList: FC = () => {
  return (
    <>
      <Header/>
      <S.ViewReportList>
        <S.ReportListWrapper>
          <S.TitleFont>승인 요청된 보고서</S.TitleFont>
          <S.ReportListContainer>
            {Array(5)
              .fill(0)
              .map((v, i) => {
                return <Report key={i} />;
              })}
          </S.ReportListContainer>
          <Pagination/>
        </S.ReportListWrapper>
      </S.ViewReportList>
    </>
  );
};

export default ViewReportList;
