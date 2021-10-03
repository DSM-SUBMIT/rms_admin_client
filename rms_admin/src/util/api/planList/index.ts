import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getPlanList = async (access_token: string, page: number) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    const response = await request.get(uri.viewPlanList + `?page=` + page + '&limit=5&type=plan');
    return response;
  } catch (error) {
    throw error;
  }
};
