import React, { FC } from 'react';
import { PlanType } from '../../../models/dto/response/planListResponse';
import * as S from '../style';

const Plan: FC<PlanType> = props => {
  const { id, is_individual, title, team_name, fields } = props;

  return (
    <S.PlanContainer>
      <S.PlanContents>
        <S.ProjectDivision>[{is_individual ? '개인' : '팀'}프로젝트]</S.ProjectDivision>
        <S.TitleFont>{title}</S.TitleFont>
        <S.Writer>{team_name}</S.Writer>
        <S.MajorFieldWrapper>
          {fields.map((v: string, i: number) => {
            return <S.MajorField key={i}>{v}</S.MajorField>;
          })}
        </S.MajorFieldWrapper>
      </S.PlanContents>
    </S.PlanContainer>
  );
};

export default Plan;
