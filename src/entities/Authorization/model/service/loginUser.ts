import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';

interface AuthData {
    name: string;
    password: string;
  }
  
interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const loginUser = createAsyncThunk(
    'login',
    async (authData: AuthData, thunkAPI) => {
        try {
            const response = await $api.post('/login', authData);

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