import { createSlice } from '@reduxjs/toolkit';
import { StackSchema } from '../type/type';
import { stackService } from '../service/stackService';


const initialState: StackSchema = {
    error: undefined,
    isLoading: false,
    data: undefined
};

export const StackSlice = createSlice({
    name: 'stack',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(stackService.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(stackService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(stackService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: StackActions } =  StackSlice;
export const { reducer: StackReducer } =  StackSlice;