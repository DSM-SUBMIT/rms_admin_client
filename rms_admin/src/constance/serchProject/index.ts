export type ProjectType = {
  id: number;
  project_type: string;
  is_individual: boolean;
  title: string;
  team_name: string;
  fields: Array<string>;
};

export type SearchProjectType = {
  total_page: number;
  total_amount: number;
  projects: Array<ProjectType>;
}