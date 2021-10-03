import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getDetailReport = async (access_token: string, reportId: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.project + `/${reportId}`);
  } catch (error) {
    throw error;
  }
};
