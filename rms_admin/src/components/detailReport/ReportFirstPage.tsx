import React, { FC, useMemo } from 'react';
import * as S from './style';
import {
  REPORT_COVER,
  PROJECT_REPORT,
  SUBMITTER,
  TEACHER,
  SCHOOL,
} from '../../constance/detailReport';

interface Props {
  projectName: string;
  writer: string;
  isIndividual: boolean;
  writerStdNumber: number | null;
}

const ReportFirstPage: FC<Props> = props => {
  const { projectName, writer, isIndividual, writerStdNumber } = props;
  const reportTitle = useMemo(() => {
    if (isIndividual) return <p>팀 {PROJECT_REPORT}</p>;
    else return <p>개인 {PROJECT_REPORT}</p>;
  }, [isIndividual]);

  const showStdNumber = useMemo(() => {
    const stringStdNumber = String(writerStdNumber);
    if (writerStdNumber !== null)
      return (
        <td>
          {stringStdNumber.slice(0, 1)}학년 {stringStdNumber.slice(1, 2)}반{' '}
          {stringStdNumber.slice(2)}번 {writer}
        </td>
      );
    else return <td>( )학년 ( )반 ( )번 {writer}</td>;
  }, [writerStdNumber, writer]);

  return (
    <S.ReportPage>
      <S.ReportCover>{REPORT_COVER}</S.ReportCover>
      <S.ReportTitle>{reportTitle}</S.ReportTitle>
      <S.ReportTitleBox>
        <p>{projectName}</p>
      </S.ReportTitleBox>
      <S.Table>
        <tr>
          <td>{SUBMITTER}</td>
          {showStdNumber}
        </tr>
        <tr>
          <td>{TEACHER}</td>
          <td></td>
        </tr>
      </S.Table>
      <S.SchoolName>{SCHOOL}</S.SchoolName>
    </S.ReportPage>
  );
};

export default ReportFirstPage;
