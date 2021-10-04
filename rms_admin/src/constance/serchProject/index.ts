export type ProjectsType = {
    id: number;
    type: string;
    title: string;
    team_name: string;
    fields: Array<string>;
  };
  
  export type SearchProjectResponseType = {
    total_page: number;
    total_amount: number;
    projects: Array<ProjectsType>;
  }