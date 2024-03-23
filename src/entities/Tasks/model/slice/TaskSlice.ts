import { createSlice } from '@reduxjs/toolkit';
import { TasksSchema } from '../type/type';
import { tasksService } from '../service/taskService';


const initialState: TasksSchema = {
    error: undefined,
    isLoading: false,
    data: undefined
};

export const TaskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(tasksService.pending, (state) => {
                state.error = undefined;
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