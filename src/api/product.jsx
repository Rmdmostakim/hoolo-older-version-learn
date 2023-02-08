import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from './config';
import url from './url';

const name = 'product/';
const product = {};
product.getAllProducts = createAsyncThunk(`${name}getAllProducts`, async () => {
    const res = await axios.get(url.getAllProducts, config.basicHeader);
    return res;
});
product.getNextPage = createAsyncThunk(`${name}getNextPage`, async (path) => {
    const res = await axios.get(path, config.basicHeader);
    return res;
});

product.getDetails = createAsyncThunk(`${name}getDetails`, async (uuid) => {
    const res = await axios.post(url.getProductDetails, { uuid }, config.basicHeader);
    return res;
});

export default product;
