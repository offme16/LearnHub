import { createSlice } from '@reduxjs/toolkit';
import { VacancySchema } from '../type/type';
import { vacancyService } from '../service/getVacancy';


const initialState: VacancySchema = {
    error: undefined,
    isLoading: false,
    vacancy: []
};

export const VacancySlice = createSlice({
    name: 'vacancy',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(vacancyService.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(vacancyService.fulfilled, (state, action) => {
                state.isLoading = false;
                state.vacancy = action.payload.items;
            })
            .addCase(vacancyService.rejected, (state, action) => {
                state.isLoading = false;
                state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
            });
    },
});

export const { actions: VacancyActions } =  VacancySlice;
export const { reducer: VacancyReducer } =  VacancySlice;