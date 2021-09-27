import axios from "axios";

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: "https://munchkin.entrydsm.hs.kr",
    withCredentials: true,
    headers: {
      withCredentials: true,
    },
  });
  return request;
};
