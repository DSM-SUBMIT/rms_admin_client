import React, { FC } from "react";
import * as S from './style';

const ViewPlan: FC = () => {
  return (
    <>
      <S.ViewPlanTable>
        <S.PlanTitle>프로젝트 계획서</S.PlanTitle>
        <S.PlanContents>
          <S.ProjectName>
            
          </S.ProjectName>
        </S.PlanContents>
      </S.ViewPlanTable>
    </>
  );
};

export default ViewPlan;