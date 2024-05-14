import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { StackActions } from '../slice/StackSlice';

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const getResourse = createAsyncThunk(
    'get_resourse',
    async (_,thunkAPI) => {
        try {
            const response = await axios.get('https://6601a8069d7276a75551e685.mockapi.io/api/v1/mock');

            if (!response.data) {
                throw new Error();
            }

            return response.data;

        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            alert(error.message);
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);