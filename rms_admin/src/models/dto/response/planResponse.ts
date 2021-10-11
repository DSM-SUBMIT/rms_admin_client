export type MemberType = {
  name: string;
  role: string;
};

export type IncludesType = {
  resultReport: boolean;
  code: boolean;
  outcome: boolean;
  others: string | false;
};

export type PlanContentType = {
  goal: string;
  content: string;
  startDate: string;
  endDate: string;
  includes: IncludesType;
};

export type IncludesResponseType = {
  result_report: boolean;
  code: boolean;
  outcome: boolean;
  others: string;
};

export type PlanContentResponseType = {
  goal: string;
  content: string;
  start_date: string;
  end_date: string;
  includes: IncludesResponseType;
};

export type DetailPlanResponseType = {
  project_id: number;
  project_name: string;
  project_type: string;
  is_individual: boolean;
  writer: string;
  writer_number: number;
  members: Array<MemberType>;
  fields: Array<string>;
  plan: PlanContentResponseType;
};
