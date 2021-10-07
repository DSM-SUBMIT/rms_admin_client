export type ReportType = {
  id: number;
  project_type: string;
  is_individual: boolean;
  title: string;
  team_name: string;
  fields: Array<string>;
};

export type ReportListResponseType = {
  projects: Array<ReportType>;
  total_page: number;
  total_amount: number;
};
