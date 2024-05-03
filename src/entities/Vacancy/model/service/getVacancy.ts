import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const vacancyService = createAsyncThunk(
    'get_vacancy',
    async (_,thunkAPI) => {
        try {
            const response = await axios.get(`https://api.hh.ru/vacancies?text=фронтенд+разработчик&per_page=20&page=0&experience=noExperience`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;

        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);