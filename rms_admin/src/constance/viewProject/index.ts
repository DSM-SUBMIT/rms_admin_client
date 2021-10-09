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
  game: boolean;
  embedded: boolean;
  security: boolean;
  aiAndBigData: boolean;
};

export type DataIdType = 'web' | 'app' | 'game' | 'embedded' | 'security' | 'aiAndBigData';
export type FieldMapPropsType = {
  id: DataIdType;
  span: string;
};
export type ProjectsType = {
    id: number;
    type: string;
    title: string;
    team_name: string;
    fields: Array<string>;
  };

export type ViewProjectResponseType = {
  currentPage: number;
  projects: Array<ProjectsType>;
  total_Page: number;
};