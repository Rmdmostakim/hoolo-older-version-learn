import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from './config';
import url from './url';

const name = 'featured/';
const featured = {};

featured.categories = createAsyncThunk(`${name}categories`, async () => {
    const res = await axios.get(url.featuredCategories, config.basicHeader);
    return res;
});
featured.brands = createAsyncThunk(`${name}brands`, async () => {
    const res = await axios.get(url.featuredBrands, config.basicHeader);
    return res;
});
featured.products = createAsyncThunk(`${name}products`, async () => {
    const res = await axios.get(url.featuredProducts, config.basicHeader);
    return res;
});
featured.courses = createAsyncThunk(`${name}courses`, async () => {
    const res = await axios.get(url.featuredCourses, config.basicHeader);
    return res;
});
featured.instructors = createAsyncThunk(`${name}instructors`, async () => {
    const res = await axios.get(url.featuredInstructors, config.basicHeader);
    return res;
});
export default featured;
