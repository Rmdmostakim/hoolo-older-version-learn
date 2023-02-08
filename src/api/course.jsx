import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from './config';
import url from './url';

const name = 'course/';
const course = {};
// All Courses
course.getAllCourses = createAsyncThunk(`${name}getAllCourses`, async () => {
    const res = await axios.get(url.getAllCourses, config.basicHeader);
    return res;
});
// get course details
course.getCourseDetails = createAsyncThunk(`${name}getCourseDetails`, async (uuid) => {
    const res = await axios.post(url.getCourseDetails, { uuid }, config.basicHeader);
    return res;
});
// get user courses
course.getUserCourses = createAsyncThunk(`${name}getUserCourses`, async () => {
    const res = await axios.get(url.getUserCourses, config.authHeader(config.token()));
    return res;
});
// course booking
course.courseBooking = async (uuid) => {
    const res = await axios
        .post(url.courseBooking, { uuid }, config.authHeader(config.token()))
        .then((response) => response)
        .catch((error) => error.response);
    return res;
};
// course order
course.courseBkashOrder = async (uuid) => {
    const res = await axios
        .post(url.courseBkashOrder, { uuid }, config.authHeader(config.token()))
        .then((response) => response)
        .catch((error) => error.response);
    return res;
};
course.courseBkashExecute = async (paymentId) => {
    const res = await axios
        .get(url.courseBkashExecute + paymentId, config.authHeader(config.token()))
        .then((response) => response)
        .catch((error) => error.response);
    return res;
};
course.courseBkashCancel = async (paymentId) => {
    const res = await axios
        .get(url.courseBkashCancel + paymentId, config.authHeader(config.token()))
        .then((response) => response)
        .catch((error) => error.response);
    return res;
};
// get all instructor
course.getAllInstructor = createAsyncThunk(`${name}getAllInstructor`, async () => {
    const res = await axios.get(url.getAllInstructor, config.basicHeader);
    return res;
});

export default course;
