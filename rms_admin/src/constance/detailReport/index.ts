export const REPORT_COVER = '보고서 겉표지 (학생 작성용)';
export const TEAM_PROJECT_REPORT = '팀 프로젝트 보고서';
export const SUBMITTER = '제출자';
export const TEACHER = '담당교사 확인';
export const SCHOOL = '대덕소프트웨어마이스터고등학교';
export const SUBTITLE = '보고서 작성 요령';
export const VIDEODOWNLOAD = '시연 영상 다운로드';
export const BTN = [
  { id: 'plan', content: '계획서 보기' },
  { id: 'download', content: '다운로드' },
];
export const APPROVEBTN = [
  { id: 'plan', content: '계획서 보기' },
  { id: 'approve', content: '승인/미승인' },
  { id: 'download', content: '다운로드' },
];
export type DetailReportResponseType = {
  field: Array<string>;
  writer: string;
  report: {
    content: string;
    videoUrl: string;
  };
};
