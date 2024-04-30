import { createAsyncThunk, ThunkDispatch } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { AxiosError } from 'axios';

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

interface PostValueArgs {
    date: Date;
    score: number;
    userCourseId: number;
}

export const postValue = createAsyncThunk<void, PostValueArgs>(
    'post_value',
    async (args, thunkAPI) => {
        try {
            const response = await $api.post('Course/SetScore', {
                score: args.score,
                solveDate: args.date,
                userCourseId: args.userCourseId
            });
            if (!response.data) {
                throw new Error();
            }
            console.log(response.data);
            return;

        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            alert(error.message);
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    },
);