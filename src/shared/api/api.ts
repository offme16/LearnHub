import axios from 'axios';
import axiosRetry from 'axios-retry';
import { USER_LOCALSTORAGE_TOKEN } from 'shared/const/localStorage';

export const baseUrl = 'https://localhost:7102/';

export const $api = axios.create({
    baseURL: baseUrl,
});

axiosRetry($api, {
    retries: 1,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: (error) => error.response!.status > 400,
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(USER_LOCALSTORAGE_TOKEN)}`
    return config;
});

$api.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${baseUrl}api/Auth/RefreshToken`);
            localStorage.setItem(USER_LOCALSTORAGE_TOKEN, response.data.accessToken);
            return $api.request(originalRequest);
        }
        catch (e) {
            console.log("NOT AUTH");
        }
    }
    throw error;
});