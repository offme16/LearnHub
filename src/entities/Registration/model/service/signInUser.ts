import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';
import { USER_LOCALSTORAGE_TOKEN } from 'shared/const/localStorage';

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
            const response = await $api.post('/sigin', registData);

            if (!response.data) {
                throw new Error();
            }
            console.log(response.data);
            localStorage.setItem(USER_LOCALSTORAGE_TOKEN, JSON.stringify(response.data));
            return response.data;

        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            alert(error.message);
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);