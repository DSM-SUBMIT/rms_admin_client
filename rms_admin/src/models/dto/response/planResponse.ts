export type MemberType = {
  name: string;
  role: string;
};

export type IncludesType = {
  result_report: boolean,
  code: boolean;
  outcome: boolean;
  others: boolean;
  others_content: string;
}

export type PlanContentType = {
  goal: string;
  content: string;
  start_date: string;
  end_date: string;
  includes: IncludesType;
};

export type PlanDetailType = {
  project_name: string;
  writer: string;
  members: Array<MemberType>;
  plan: PlanContentType;
};
