import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../type/type';
import { getValue } from '../service/getValue';


const initialState: ProfileSchema = {
    error: undefined,
    isLoading: false,
    score: 0,
    date: "",
    data: []
};

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setScore: (state, action) => {
            state.score = action.payload;
          },
        setDate: (state, action) => {
            state.date = action.payload;
          },
     },
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