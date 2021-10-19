import uri from '../../../constance/uri';
import { getRequest } from '../default';
import { loginRequest } from '../../../models/dto/request/loginRequest';
import { loginResponse, refreshResponse } from '../../../models/dto/response/loginResponse';
import moment from 'moment';

export const getToken = async (body: loginRequest) => {
  try {
    const request = getRequest();
    const response = await request.post<loginResponse>(uri.login, body);
    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);
    localStorage.setItem(
      'access_token_expiration_time',
      moment().add(1, 'day').format('yyyy-MM-DD HH:mm:ss'),
    );
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const request = getRequest();
    const response = await request.put<refreshResponse>(uri.refreshToken, {
      refresh_token: localStorage.getItem('refresh_token'),
    });
    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);
    localStorage.setItem(
      'access_token_expiration_time',
      moment().add(1, 'day').format('yyyy-MM-DD HH:mm:ss'),
    );
    window.location.reload();
  } catch (error) {
    throw error;
  }
};
