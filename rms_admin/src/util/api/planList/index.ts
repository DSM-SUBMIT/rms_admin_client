import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getPlanList = async (accessToken: string, page: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.get(uri.viewPlanReportList + `?page=` + page + '&limit=5&type=plan');
    return response;
  } catch (error) {
    throw error;
  }
};
