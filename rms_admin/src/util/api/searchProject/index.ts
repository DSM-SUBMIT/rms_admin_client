import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getSearchProject = async (access_token: string, query: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    const response = await request.get(uri.searchProject + query);
    return response;
  } catch (error) {
    throw error;
  }
};
