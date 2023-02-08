/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import category from '../api/category';

const CategorySlice = createSlice({
    name: 'category',
    initialState: {
        isLoading: false,
        isError: false,
        gCategories: null,
        dpCategories: null,
        pCategories: null,
        cCategories: null,
    },
    extraReducers: (builder) => {
        // GCategories
        builder.addCase(category.getallGCategories.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(category.getallGCategories.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.gCategories = data;
        });

        builder.addCase(category.getallGCategories.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
        // PCategories
        builder.addCase(category.getallPCategories.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(category.getallPCategories.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.pCategories = data;
        });

        builder.addCase(category.getallPCategories.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });

        // CCategories
        builder.addCase(category.getallCategories.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(category.getallCategories.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.cCategories = data;
        });

        builder.addCase(category.getallCategories.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
        // DPCategories
        builder.addCase(category.getallDpCategories.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(category.getallDpCategories.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.dpCategories = data;
        });

        builder.addCase(category.getallDpCategories.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});
export default CategorySlice.reducer;
