import axios from 'axios';
import axiosRetry from 'axios-retry';

const baseUrl = 'https://6601a8069d7276a75551e685.mockapi.io/api/v1/mock';

export const $api = axios.create({
    baseURL: baseUrl,
});

axiosRetry($api, {
    retries: 1,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: (error) => error.response!.status > 400,
});