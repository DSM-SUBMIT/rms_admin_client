import React, { FC } from "react";
import { useHistory } from "react-router";
import { PlanType } from "../../../models/dto/response/planListResponse";
import * as S from "../style";

const Plan: FC<PlanType> = props => {
  const { id, type, title, team_name, fields} = props;
  const history = useHistory();

  const onClickPlanDetail = () => {
    history.push(`view/plan/${id}`);
  }

  return (
    <S.PlanContainer onClick={onClickPlanDetail}>
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
