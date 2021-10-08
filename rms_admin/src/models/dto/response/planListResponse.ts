export type PlanResponseType = {
  id: number;
  project_type: string;
  is_individual: boolean;
  title: string;
  team_name: string;
  fields: Array<string>;
};

export type PlanType = {
  id: number;
  projecType: string;
  isIndividual: boolean;
  title: string;
  teamName: string;
  fields: Array<string>;
};

export type PlanListResponseType = {
  projects: Array<PlanResponseType>;
  total_page: number;
  total_amount: number;
};
