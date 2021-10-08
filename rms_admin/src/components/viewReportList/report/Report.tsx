import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { ReportType } from '../../../models/dto/response/reportListResponse';
import * as S from '../style';

const Report: FC<ReportType> = props => {
  const { id, is_individual, title, team_name, fields } = props;
  const history = useHistory();

  const onClickReportDetail = () => {
    history.push(`approve-detail-report/${id}`);
  };

  return (
    <S.ReportContainer onClick={onClickReportDetail}>
      <S.ReportContents>
        <S.ProjectDivision>[{is_individual ? '팀' : '개인'}프로젝트]</S.ProjectDivision>
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
