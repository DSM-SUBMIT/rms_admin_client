export const CategoryBox: Array<FieldMapPropsType> = [
    { id : 'web', span : '웹' },
    { id : 'app', span : '앱' },
    { id : 'embedded', span : '임베디드' },
    { id : 'game', span : '게임' },
    { id : 'aiAndBigData', span : '인공지능 / 빅데이터' },
    { id : 'security', span : '보안' }
  ]

export type CategoryStateType = {
  web: boolean;
  app: boolean;
  embedded: boolean;
  game: boolean;
  aiAndBigData: boolean;
  security: boolean;
};

export type DataIdType = 'web' | 'app' | 'embedded' | 'game' | 'aiAndBigData' | 'security';
export type FieldMapPropsType = {
  id: DataIdType;
  span: string;
};
export type ProjectsType = {
    id: number;
    project_type: string;
    title: string;
    team_name: string;
    fields: Array<string>;
    github_url: string;
    service_url: string;
    docs_url: string;
  };

export type ViewProjectResponseType = {
  currentPage: number;
  projects: Array<ProjectsType>;
  total_page: number;
};