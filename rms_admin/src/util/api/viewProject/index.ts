import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';
import { CheckStateType } from '../../../constance/viewProject';

const setField = (field: CheckStateType) => {
  let fieldList: Array<string> = [];
  if (field.web === true) fieldList.push('WEB');
  if (field.app === true) fieldList.push('APP');
  if (field.game === true) fieldList.push('GAME');
  if (field.embedded === true) fieldList.push('EMBEDDED');
  if (field.aiAndBigData === true) fieldList.push('AI_BIGDATA');
  if (field.security === true) fieldList.push('SECURITY');
};

export const getViewProject = async (access_token: string, field: CheckStateType) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.viewProject + setField(field));
  } catch (error) {
    throw error;
  }
};