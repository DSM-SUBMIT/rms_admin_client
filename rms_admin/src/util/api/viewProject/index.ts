import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';
import { CheckStateType } from '../../../constance/viewProject';

const setField = (field: CheckStateType) => {
  let fields: Array<string> = [];
  if (field.web === true) fields.push('WEB');
  if (field.app === true) fields.push('APP');
  if (field.game === true) fields.push('GAME');
  if (field.embedded === true) fields.push('EMBEDDED');
  if (field.ai === true) fields.push('AI_BIGDATA');
  if (field.security === true) fields.push('SECURITY');
};

export const getViewProject = async (access_token: string, page: number, field: CheckStateType) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.viewProject + '?page=' + page + '&size=5&field=' + setField(field));
  } catch (error) {
    throw error;
  }
};