import React, { FC } from "react";
import Plan from "./plan";
import * as S from "./style";

const ViewPlanList: FC = () => {
  return (
    <>
      <S.ViewPlanList>
        <S.PlanListWrapper>
          <S.TitleFont>승인 요청된 계획서</S.TitleFont>
          <S.PlanListContainer>
            {Array(10)
              .fill(0)
              .map((v, i) => {
                return <Plan key={i}/>;
              })}
          </S.PlanListContainer>
        </S.PlanListWrapper>
      </S.ViewPlanList>
    </>
  );
};

export default ViewPlanList;
