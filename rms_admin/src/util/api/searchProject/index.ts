import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getSearchProject = async (access_token: string, query: string, page: number) => {
  console.log(query);
  try {
    const request = getRequestWithAccessToken(access_token);
    const response = await request.get(uri.searchProject + '?query=' + query +  `&page=`+ page + '&limit=5');
    return response;
  } catch (error) {
    throw error;
  }
};