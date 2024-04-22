import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';
import { USER_LOCALSTORAGE_TOKEN, USER_LOCALSTORAGE_REFRESH } from 'shared/const/localStorage';
import { UserActions } from '../slice/UserSlice';

interface Token {
    jwtToken: string;
    refreshToken: string;
    userid: string;
}

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

export const repeatAuth = createAsyncThunk<Token, { jwtToken: string; refreshToken: string }, { rejectValue: string }>(
    'user_repAuth',
    async ({ jwtToken, refreshToken }, thunkAPI) => {
        try {
            const response = await $api.post<Token>('http://localhost:5092/api/Auth/RefreshToken', {
                jwtToken: JSON.parse(jwtToken),
                refreshToken: JSON.parse(refreshToken)
            });

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(
                USER_LOCALSTORAGE_TOKEN,
                JSON.stringify(response.data.jwtToken)
              );
              localStorage.setItem(
                USER_LOCALSTORAGE_REFRESH,
                JSON.stringify(response.data.refreshToken)
              );
              thunkAPI.dispatch(UserActions.setUser(response.data.userid));
            return response.data;
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            alert(error.message);
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);