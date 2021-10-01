import uri from "../../../constance/uri";
import { getRequest } from "../default";
import { loginRequest } from "../../../models/dto/request/loginRequest";
import { loginResponse } from "../../../models/dto/response/loginResponse";

export const getToken = async (body: loginRequest) => {
  try {
    const request = getRequest();
    const response = await request.post<loginResponse>(uri.login, body);
    localStorage.setItem("access_token", response.data.access_token);
  } catch (error) {
    throw error;
  }
};
