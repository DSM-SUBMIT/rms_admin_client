export type ProjectsType = {
  id: number;
  type: string;
  title: string;
  team_name: string;
  fields: Array<string>;
};

export type CheckStateType = {
  web: boolean;
  app: boolean;
  game: boolean;
  embedded: boolean;
  security: boolean;
  aiAndBigData: boolean;
};

export type ViewProjectResponseType = {
  total_page: number;
  total_amount: number;
  projects: Array<ProjectsType>;
}