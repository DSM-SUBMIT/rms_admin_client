import React, { FC } from "react";
import Report from "./report";
import * as S from "./style";

const ViewReportList: FC = () => {
  return (
    <>
      <S.ViewReportList>
        <S.ReportListWrapper>
          <S.TitleFont>승인 요청된 보고서</S.TitleFont>
          <S.ReportListContainer>
            {Array(10)
              .fill(0)
              .map((v, i) => {
                return <Report key={i}/>;
              })}
          </S.ReportListContainer>
        </S.ReportListWrapper>
      </S.ViewReportList>
    </>
  );
};

export default ViewReportList;
