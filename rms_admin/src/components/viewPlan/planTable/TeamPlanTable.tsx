import React, { FC } from 'react';
import { MemberType } from '../../../models/dto/response/planResponse';
import DetailPlanState from '../../../modules/redux/reducer/plan/interface';
import ProjectMember from '../projectMember/ProjectMember';
import * as S from '../style';

const TeamPlanTable: FC<DetailPlanState> = props => {
  const { projectName, writer, writerNumber, plan, member } = props;
  const { resultReport, code, outcome, others } = plan.includes;

  return (
    <>
      <S.ViewPlanTable id='planTable'>
        <S.PlanTitle>팀프로젝트 계획서</S.PlanTitle>
        <S.PlanContents>
          <S.ProjectContentWrapper>
            <S.ProjectInfoFont>프로젝트명</S.ProjectInfoFont>
            <S.ThisProjectInfoFont>{projectName}</S.ThisProjectInfoFont>
          </S.ProjectContentWrapper>
          <S.ProjectContentWrapper>
            <S.ProjectInfoFont>예정기간</S.ProjectInfoFont>
            <S.ThisProjectInfoFont>
              {plan.startDate} ~ {plan.endDate}
            </S.ThisProjectInfoFont>
          </S.ProjectContentWrapper>
          <S.ProjectContentWrapper>
            <S.ProjectMember>
              프로젝트
              <br />
              팀원 및 역할
            </S.ProjectMember>
            <S.ThisProjectMemberList>
              {member.map((v: MemberType, i: number) => {
                return <ProjectMember {...v} key={i} />;
              })}
            </S.ThisProjectMemberList>
          </S.ProjectContentWrapper>
          <S.ProjectContentWrapper>
            <S.ProjectInfoFont>신청자</S.ProjectInfoFont>
            <S.ApplicantInfo>학번</S.ApplicantInfo>
            <S.ApplicantInfo>{writerNumber}</S.ApplicantInfo>
            <S.ApplicantInfo>이름</S.ApplicantInfo>
            <S.ApplicantInfo>{writer}</S.ApplicantInfo>
          </S.ProjectContentWrapper>
          <S.ProjectContentWrapper>
            <S.ProjectInfoFont>프로젝트 목표</S.ProjectInfoFont>
            <S.ProjectContents>{plan.goal}</S.ProjectContents>
          </S.ProjectContentWrapper>
          <S.ProjectContentWrapper>
            <S.ProjectInfoFont>프로젝트 내용</S.ProjectInfoFont>
            <S.ProjectContents>{plan.content}</S.ProjectContents>
          </S.ProjectContentWrapper>
          <S.ProjectResultWrapper>
            <S.ProjectResult>
              결과물
              <br />
              (해당 사항 체크)
            </S.ProjectResult>
            <S.ThisProjectResult>
              <label>
                <S.ProjectResultCheckBox
                  type='checkbox'
                  name='결과 보고서'
                  checked={resultReport}
                  readOnly={true}
                />
                결과 보고서
              </label>
              <label>
                <S.ProjectResultCheckBox
                  type='checkbox'
                  name='프로그램 코드'
                  checked={code}
                  readOnly={true}
                />
                프로그램 코드
              </label>
              <label>
                <S.ProjectResultCheckBox
                  type='checkbox'
                  name='실행물(영상 또는 사진)'
                  checked={outcome}
                  readOnly={true}
                />
                실행물(영상 또는 사진)
              </label>
              <label>
                <S.ProjectResultCheckBox
                  type='checkbox'
                  name='기타'
                  checked={others !== false}
                  readOnly={true}
                />
                기타( {others} )
              </label>
            </S.ThisProjectResult>
          </S.ProjectResultWrapper>
          <S.TeacherConfirmationWrapper>
            <S.TeacherConfirmation>담당교사 확인</S.TeacherConfirmation>
            <S.ThisTeacherConfirmation>
              <span> &nbsp;&nbsp;년 &nbsp;&nbsp;&nbsp;월 &nbsp;&nbsp;&nbsp;일</span>
              <span>직위: &nbsp;&nbsp;</span>
              <span>이름: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(인)</span>
            </S.ThisTeacherConfirmation>
          </S.TeacherConfirmationWrapper>
        </S.PlanContents>
      </S.ViewPlanTable>
    </>
  );
};

export default TeamPlanTable;
