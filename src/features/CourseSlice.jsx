/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import course from '../api/course';

const CourseSlice = createSlice({
    name: 'course',
    initialState: {
        isLoading: false,
        isError: false,
        courses: null,
        cover: '',
        nextPage: null,
        courseDetails: null,
        recommended: null,
        instructors: null,
        cardHeight: 0,
        total: 0,
        nextPageLoading: true,
        userCourses: null,
    },
    reducers: {
        setCardHeight: (state, action) => {
            const { payload } = action;
            state.cardHeight = payload;
        },
        setNextPageLoading: (state) => {
            state.nextPageLoading = false;
        },
        setCover: (state, action) => {
            state.cover = action.payload;
        },
    },
    extraReducers: (builder) => {
        // all courses
        builder.addCase(course.getAllCourses.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(course.getAllCourses.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.nextPage = data.next_page_url;
            state.total = data.per_page;
            state.courses = data.data;
            if (data.next_page_url) {
                state.nextPageLoading = true;
            }
        });

        builder.addCase(course.getAllCourses.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
        // get course details
        builder.addCase(course.getCourseDetails.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(course.getCourseDetails.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.courseDetails = data;
        });

        builder.addCase(course.getCourseDetails.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
        // get users course
        builder.addCase(course.getUserCourses.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(course.getUserCourses.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.userCourses = data;
        });

        builder.addCase(course.getUserCourses.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
        // get all instructor
        builder.addCase(course.getAllInstructor.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.instructors = data;
        });
    },
});
export const { setCardHeight, setNextPageLoading, setCover } = CourseSlice.actions;
export default CourseSlice.reducer;
