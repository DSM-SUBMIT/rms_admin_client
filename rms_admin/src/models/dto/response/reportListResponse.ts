export type ReportType = {
  id: number;
  type: string;
  title: string;
  team_name: string;
  fields: Array<string>;
};

export type ReportListResponseType = {
  projects: Array<ReportType>;
  total_page: number;
  total_amount: number;
};
