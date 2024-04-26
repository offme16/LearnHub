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
    async (id: string, thunkAPI) => {
        try {
            const response = await axios.post(`${baseUrl}Course/FindTaskByID`, {
                id
            });

            if (!response.data) {
                throw new Error();
            }
            console.log(response.data);
            return response.data;

        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            alert(error.message);
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);