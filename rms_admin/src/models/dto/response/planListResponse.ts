export type PlanType = {
  id: number;
  project_type: string;
  is_individual: boolean;
  title: string;
  team_name: string;
  fields: Array<string>;
};

export type PlanListResponseType = {
  projects: Array<PlanType>;
  total_page: number;
  total_amount: number;
};
