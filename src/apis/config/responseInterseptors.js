import axios from 'axios';

// import { fetchNewAccessToken } from '../authAPIs';

export const errorHandler = (error) => {
	const statusCode = error.response?.status;

	if (statusCode && statusCode !== 401) {
		// console.error(error);
	}

	return Promise.reject(error);
};

export const refreshTokenHandler = async (error) => {
	const originalRequest = error.config;

	if (error.response.status === 403 && !originalRequest._retry) {
	
		originalRequest._retry = true;
		const access_token = await fetchNewAccessToken();
		axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
		return axios(originalRequest);
	}

	return Promise.reject(error);
};
