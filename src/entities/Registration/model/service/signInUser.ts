import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';

interface RegistData {
    name: string;
    password: string;
    email: string;
  }

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const siginUser = createAsyncThunk(
    'sigin',
    async (registData: RegistData, thunkAPI) => {
        try {
            const response = await $api.post('http://localhost:5092/api/Auth/Register', 
            {
                userName: registData.name,
                email: registData.email,
                password: registData.password,
            });
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