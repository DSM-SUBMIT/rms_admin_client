export type ReportType = {
  id: number;
  projectType: string;
  isIndividual: boolean;
  title: string;
  teamName: string;
  fields: Array<string>;
};

export type ReportResponseType = {
  id: number;
  project_type: string;
  is_individual: boolean;
  title: string;
  team_name: string;
  fields: Array<string>;
};

export type ReportListResponseType = {
  projects: Array<ReportResponseType>;
  total_page: number;
  total_amount: number;
};
