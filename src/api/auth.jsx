import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from './config';
import url from './url';

const name = 'auth/';
const auth = {};
auth.auth = createAsyncThunk(`${name}auth`, async (phone) => {
    const res = await axios.post(url.auth, { phone }, config.basicHeader);
    return res;
});
auth.authConfirm = createAsyncThunk(`${name}authConfirm`, async (credentials) => {
    const res = await axios
        .post(
            url.authVerify,
            { phone: credentials.phone, otp: credentials.otp, mac_address: credentials.macAddress },
            config.basicHeader
        )
        .catch((error) => error);
    return res;
});

auth.userInfo = createAsyncThunk(`${name}userInfo`, async () => {
    const res = await axios.get(url.userInfo, config.authHeader(config.token()));
    return res;
});
auth.userLogout = async () => {
    const res = await axios
        .get(url.userLogout, config.authHeader(config.token()))
        .then((response) => response)
        .catch((error) => error.response);
    return res;
};
auth.userRegByHoolo = createAsyncThunk(`${name}userRegByHoolo`, async (phone) => {
    const res = await axios.post(url.userRegByHoolo,{phone}, config.basicHeader);
    return res;
});
export default auth;
