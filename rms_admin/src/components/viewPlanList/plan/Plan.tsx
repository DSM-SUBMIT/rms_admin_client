import React, { FC } from "react";
import * as S from "../style";

const Plan: FC = () => {
  return (
    <S.PlanContainer>
      <S.PlanContents>
        <S.ProjectDivision>[팀프로젝트]</S.ProjectDivision>
        <S.TitleFont>보고서 관리 시스템</S.TitleFont>
        <S.Writer>서브밋</S.Writer>
        <S.MajorFieldWrapper>
          <S.MajorField>보안</S.MajorField>
          <S.MajorField>임베디드</S.MajorField>
          <S.MajorField>인공지능/빅데이터</S.MajorField>
          <S.MajorField>게임</S.MajorField>
          <S.MajorField>웹</S.MajorField>
          <S.MajorField>앱</S.MajorField>
        </S.MajorFieldWrapper>
      </S.PlanContents>
    </S.PlanContainer>
  );
};

export default Plan;
