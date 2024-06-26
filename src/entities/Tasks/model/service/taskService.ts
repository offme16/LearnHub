import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { baseUrl } from 'shared/api/api';

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const tasksService = createAsyncThunk(
    'get_tasks',
    async (id: number, thunkAPI) => {
        try {
            const response = await axios.post(`https://localhost:7102/Course/GetTasksByCourseId`,
                JSON.stringify(id),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

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