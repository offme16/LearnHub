import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { baseUrl } from 'shared/api/api';
import { USER_COURSE_ID, USER_LOCALSTORAGE_ID } from 'shared/const/localStorage';
import { TaskActions } from '../slice/TaskSlice';

interface KnownError {
    message: string;
    description: string;
    code: number | undefined;
}

const userId = localStorage.getItem(USER_LOCALSTORAGE_ID)?.replace(/[\\"]/g, '');

export const sigUpCourse = createAsyncThunk(
    'sigup_course',
    async (courseId: number, thunkAPI) => {
        try {
            const response = await axios.post(`${baseUrl}Course/SignUpCourse?courseId=${courseId}`,
            JSON.stringify(userId),
                {headers: {'Content-Type': 'application/json'}}
            );

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_COURSE_ID, response.data.userCourseID)
            thunkAPI.dispatch(TaskActions.setUserCourseID(response.data))
            return response.data;
        } catch (e) {
            const error: AxiosError<KnownError> = e as any;
            return thunkAPI.rejectWithValue('Произошла ошибка');
        }
    });