/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import instructor from '../api/instructor';

const InstructorSlice = createSlice({
    name: 'instructor',
    initialState: {
        isLoading: false,
        isError: false,
        instructors: null,
        instructor: null,
        courses: null,
        nextPage: null,
    },

    extraReducers: (builder) => {
        // get all instructor
        builder.addCase(instructor.getAllInstructor.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.instructors = data;
        });

        // get instructor info
        builder.addCase(instructor.getInstructorInfo.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(instructor.getInstructorInfo.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.instructor = data;
        });

        builder.addCase(instructor.getInstructorInfo.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });

        // get instructor courses
        builder.addCase(instructor.getInstructorCourses.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(instructor.getInstructorCourses.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.courses = data.data;
            state.nextPage = data.next_page_url;
        });

        builder.addCase(instructor.getInstructorCourses.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});
export default InstructorSlice.reducer;
