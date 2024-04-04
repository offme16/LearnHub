import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../type/type';
import { getValue } from '../service/getValue';


const initialState: ProfileSchema = {
    error: undefined,
    isLoading: false,
    data: undefined,
};

export const ProfileSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(getValue.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getValue.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getValue.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: ProfileActions } =  ProfileSlice;
export const { reducer: ProfileReducer } =  ProfileSlice;