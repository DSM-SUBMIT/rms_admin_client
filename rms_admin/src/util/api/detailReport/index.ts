import { access } from 'fs';
import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const getDetailReport = async (access_token: string, reportId: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.project + `/${reportId}` + '/report');
  } catch (error) {
    throw error;
  }
};

export const getDownloadFile = async (reportId: string, fileName: string) => {
  const access_token: string = localStorage.getItem('access_token') as string;
  try {
    const request = getRequestWithAccessToken(access_token, 'blob');
    const response = await request.get(`https://files-api.dsm-rms.com/files/${reportId}/archive`);
    const url = window.URL.createObjectURL(
      new Blob([response.data], { type: response.headers['content-type'] }),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${fileName}.zip`);
    link.click();
  } catch (error) {
    throw error;
  }
};
