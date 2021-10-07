import React, { FC } from 'react';
import Plan from './plan';
import Pagination from '../pagination/Pagination';
import * as S from './style';
import Header from '../header/Header';
import { PlanType } from '../../models/dto/response/planListResponse';

interface Props {
  page: number;
  projects: Array<PlanType>;
  total_page: number;
  total_amount: number;
  setPage: (payload: number) => void;
  setPlanList: () => void;
}

const ViewPlanList: FC<Props> = props => {
  const { page, projects, total_page, setPage } = props;
  const childProps = {
    page,
    total_page,
    setPage,
  };

  return (
    <>
      <Header />
      <S.ViewPlanList>
        <S.PlanListWrapper>
          <S.TitleFont>승인 요청된 계획서</S.TitleFont>
          <S.PlanListContainer>
            {projects.map((v: PlanType, i: number): any => {
              return <Plan {...v} key={v.id} />;
            })}
          </S.PlanListContainer>
          <Pagination {...childProps} />
        </S.PlanListWrapper>
      </S.ViewPlanList>
    </>
  );
};

export default ViewPlanList;
