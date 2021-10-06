import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const saveFeedback = async (
  access_token: string,
  id: string,
  comment: string,
  type: string,
  approveType: string,
) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.post(`${uri.feedback}/${id}/${type}`, {
      comment: comment,
      type: approveType,
    });
  } catch (error) {
    throw error;
  }
};
