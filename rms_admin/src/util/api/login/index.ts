import uri from "../../../constance/uri";
import { loginResponse } from "../../../models/dto/reponse/loginResponse";
import { loginRequest } from "../../../models/dto/request/loginRequest";
import { getRequest } from "../default";

export const login = async (body: loginRequest) => {
  try {
    const request = getRequest();
    const response = await request.post<loginResponse>(uri.signin, body);
    localStorage.setItem("access_token", response.data.access_token);
    return response.data;
  } catch (error) {
    throw error;
  }
};
