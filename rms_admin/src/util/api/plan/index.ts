import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getPlanDetail = async (accessToken: string, id: string) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.get(uri.detailPlan + `/${id}/plan`);
    return response;
  } catch (error) {
    throw error;
  }
};
