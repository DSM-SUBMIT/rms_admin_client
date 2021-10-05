import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const changePassword = async (
  access_token: string,
  oldPassword: string,
  newPassword: string,
) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    const response = await request.patch(uri.changePassword, {
      oldPassword: oldPassword,
      newPassword: newPassword,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
