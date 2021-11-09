export const SEARCH_RESULT = "검색결과가 없습니다. 검색어를 다시 입력해주세요 😀";

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