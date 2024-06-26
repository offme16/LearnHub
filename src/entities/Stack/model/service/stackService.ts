import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const stackService = createAsyncThunk(
    'get_stack',
    async (_,thunkAPI) => {
        try {
            const response = await $api.get('Course/GetAllCourses');

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