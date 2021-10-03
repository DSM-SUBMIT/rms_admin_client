export type PlanType = {
  id: number;
  type: string;
  title: string;
  team_name: string;
  fields: Array<string>;
};

export type PlanListResponseType = {
  projects: Array<PlanType>;
  total_page: number;
  total_amount: number;
};
