import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';
import { CategoryStateType, ViewProjectResponseType } from '../../../constance/viewProject';

const setField = (field: CategoryStateType) => {
  let fields: Array<string> = [];
  if (field.web === true) fields.push('WEB');
  if (field.app === true) fields.push('APP');
  if (field.game === true) fields.push('GAME');
  if (field.embedded === true) fields.push('EMBEDDED');
  if (field.aiAndBigData === true) fields.push('AI_BIGDATA');
  if (field.security === true) fields.push('SECURITY');
  if(fields.length !== 0)
    return `&field=${fields}`;
  else return '';
};

export const getViewProject = async (access_token: string, page: number, field: CategoryStateType) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get<ViewProjectResponseType>(uri.viewProject + '?page=' + page + '&limit=5' + setField(field));
  } catch (error) {
    throw error;
  }
};