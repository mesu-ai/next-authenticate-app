import { getAccessToken } from "../../utils/cookies";

export const accessTokenHandeler = (config) => {

  const token = getAccessToken();

  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      ...config.headers,
    };
  }

  return config;
};
