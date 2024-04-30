import { createSlice } from '@reduxjs/toolkit';
import { TasksSchema } from '../type/type';
import { tasksService } from '../service/taskService';


const initialState: TasksSchema = {
    error: '',
    isLoading: false,
    data: {
        courseID: 0,
        title: null,
        description: null,
        tasks: [],
        links: null,
    },
    userCourseID: 0,
};

export const TaskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setUserCourseID: (state, action) => {
            state.userCourseID = action.payload.userCourseID;
        }
     },
    extraReducers: (builder) => {
        builder
            .addCase(tasksService.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(tasksService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(tasksService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: TaskActions } =  TaskSlice;
export const { reducer: TaskReducer } =  TaskSlice;