import React, { FC } from 'react';
import Plan from './plan';
import Pagination from '../pagination/Pagination';
import * as S from './style';
import { PlanType } from '../../models/dto/response/planListResponse';

interface Props {
  page: number;
  projects: Array<PlanType>;
  totalPage: number;
  totalAmount: number;
  setPage: (payload: number) => void;
  setPlanList: () => void;
}

const ViewPlanList: FC<Props> = props => {
  const { page, projects, totalPage, setPage } = props;
  const childProps = {
    page,
    totalPage,
    setPage,
  };

  return (
    <>
      <S.ViewPlanList>
        <S.PlanListWrapper>
          <S.TitleFont>승인 요청된 계획서</S.TitleFont>
          <S.PlanListContainer>
            {projects.map((v: PlanType): any => {
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
