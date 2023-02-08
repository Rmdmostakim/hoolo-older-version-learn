import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from './config';
import url from './url';

const name = 'address/';
const address = {};
address.getCountries = createAsyncThunk(`${name}getCountries`, async () => {
    const res = await axios.get(url.getCountries, config.basicHeader);
    return res;
});
address.getStates = createAsyncThunk(`${name}getStates`, async (uuid) => {
    const res = await axios.post(url.getStates, { uuid }, config.basicHeader);
    return res;
});
address.getCities = createAsyncThunk(`${name}getCities`, async (uuid) => {
    const res = await axios.post(url.getCities, { uuid }, config.basicHeader);
    return res;
});
address.getThanas = createAsyncThunk(`${name}getThanas`, async (uuid) => {
    const res = await axios.post(url.getThanas, { uuid }, config.basicHeader);
    return res;
});
address.getPostCodes = createAsyncThunk(`${name}getPostCodes`, async (uuid) => {
    const res = await axios.post(url.getPostCodes, { uuid }, config.basicHeader);
    return res;
});
address.storeShippingAddress = async (credentials) => {
    const data = {
        name: credentials.name,
        phone: credentials.phone,
        country_uuid: credentials.country,
        state_uuid: credentials.state,
        city_uuid: credentials.city,
        thana_uuid: credentials.thana,
        post_code_uuid: credentials.postcode,
        address: credentials.address,
    };
    const res = await axios
        .post(url.storeShippingAddress, data, config.authHeader(config.token()))
        .then((response) => response)
        .catch((error) => error.response);
    return res;
};
address.getShippingAddress = createAsyncThunk(`${name}getShippingAddress`, async () => {
    const res = await axios.get(url.getShippingAddress, config.authHeader(config.token()));
    return res;
});
export default address;
