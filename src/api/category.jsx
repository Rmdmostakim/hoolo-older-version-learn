import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from './config';
import url from './url';

const name = 'category/';
const category = {};
// Grandparent Categories
category.getallGCategories = createAsyncThunk(`${name}getallGCategories`, async () => {
    const res = await axios.get(url.getallGCategories, config.basicHeader);
    return res;
});
// Parent Categories
category.getallPCategories = createAsyncThunk(`${name}getallPCategories`, async () => {
    const res = await axios.get(url.getallPCategories, config.basicHeader);
    return res;
});
// Child Categories
category.getallCategories = createAsyncThunk(`${name}getallCategories`, async () => {
    const res = await axios.get(url.getallCategories, config.basicHeader);
    return res;
});
// Digital Product Caregories
category.getallDpCategories = createAsyncThunk(`${name}getallDpCategories`, async () => {
    const res = await axios.get(url.getallDpCategories, config.basicHeader);
    return res;
});
export default category;
