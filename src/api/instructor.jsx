import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from './config';
import url from './url';

const name = 'instructor/';
const instructor = {};

// get all instructor
instructor.getAllInstructor = createAsyncThunk(`${name}getAllInstructor`, async () => {
    const res = await axios.get(url.getAllInstructor, config.basicHeader);
    return res;
});
// get instructor
instructor.getInstructorInfo = createAsyncThunk(`${name}getInstructorInfo`, async (uuid) => {
    const res = await axios.post(url.getInstructorInfo, { uuid }, config.basicHeader);
    return res;
});
// get instructor courses
instructor.getInstructorCourses = createAsyncThunk(`${name}getInstructorCourses`, async (uuid) => {
    const res = await axios.post(url.getInstructorCourses, { uuid }, config.basicHeader);
    return res;
});

export default instructor;
