export const REPORT_COVER = '보고서 겉표지 (학생 작성용)';
export const PROJECT_REPORT = '프로젝트 보고서';
export const SUBMITTER = '제출자';
export const TEACHER = '담당교사 확인';
export const SCHOOL = '대덕소프트웨어마이스터고등학교';
export const SUBTITLE = '보고서 작성 요령';
export const VIDEODOWNLOAD = '시연 영상 또는 코드 파일 다운로드';
export const BTN = [
  { id: 'plan', content: '계획서 보기' },
  { id: 'download', content: '다운로드' },
];
export const APPROVEBTN = [
  { id: 'plan', content: '계획서 보기' },
  { id: 'approve', content: '승인/미승인' },
  { id: 'download', content: '다운로드' },
];
export const DOWNLOADING = '파일을 다운로드 중입니다. 시간이 걸릴 수 있습니다.';
export type DetailReportResponseType = {
  project_name: string;
  writer: string;
  project_id: number;
  is_individual: boolean;
  writer_number: number | null;
  report: {
    content: string;
  };
};
