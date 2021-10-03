import React, { FC } from 'react';
import { ReportType } from '../../../models/dto/response/reportListResponse';
import * as S from '../style';

const Report: FC<ReportType> = props => {
  const { id, type, title, team_name, fields } = props;

  return (
    <S.ReportContainer>
      <S.ReportContents>
        <S.ProjectDivision>[{type}]</S.ProjectDivision>
        <S.TitleFont>{title}</S.TitleFont>
        <S.Writer>{team_name}</S.Writer>
        <S.MajorFieldWrapper>
          {fields.map((v: string, i: number) => {
            return <S.MajorField key={i}>{v}</S.MajorField>;
          })}
        </S.MajorFieldWrapper>
      </S.ReportContents>
    </S.ReportContainer>
  );
};

export default Report;
