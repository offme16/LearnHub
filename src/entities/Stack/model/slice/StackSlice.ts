import { createSlice } from '@reduxjs/toolkit';
import { StackSchema } from '../type/type';
import { stackService } from '../service/stackService';
import { getResourse } from '../service/getResourse';


const initialState: StackSchema = {
    error: '',
    isLoading: false,
    data: [],
    Url: [],
};

export const StackSlice = createSlice({
    name: 'stack',
    initialState,
    reducers: {
        getUrl: (state, action) => {
            state.Url = action.payload;
        }
     },
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
            .addCase(getResourse.fulfilled, (state, action) => {
                state.isLoading = false;
                state.Url = action.payload;
            })
            .addCase(stackService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: StackActions } =  StackSlice;
export const { reducer: StackReducer } =  StackSlice;