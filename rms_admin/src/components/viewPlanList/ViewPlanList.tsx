import React, { FC } from "react";
import Plan from "./plan";
import Header from "../header/Header";
import Pagination from '../pagination/Pagination';
import * as S from "./style";

const ViewPlanList: FC = () => {
  return (
    <>
      <Header/>
      <S.ViewPlanList>
        <S.PlanListWrapper>
          <S.TitleFont>승인 요청된 계획서</S.TitleFont>
          <S.PlanListContainer>
            {Array(5)
              .fill(0)
              .map((v, i) => {
                return <Plan key={i} />;
              })}
          </S.PlanListContainer>
          <Pagination/>
        </S.PlanListWrapper>
      </S.ViewPlanList>
    </>
  );
};

export default ViewPlanList;
