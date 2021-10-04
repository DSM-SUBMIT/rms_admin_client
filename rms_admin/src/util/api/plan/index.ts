import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getPlanDetail = async (accessToken: string, id: number) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.get(uri.viewPlanDetail + `/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
