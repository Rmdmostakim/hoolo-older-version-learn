import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from './config';
import url from './url';

const name = 'campaign/';
const campaign = {};

campaign.categoryCampaign = createAsyncThunk(`${name}categoryCampaign`, async () => {
    const res = await axios.get(url.categoryCampaign, config.basicHeader);
    return res;
});
campaign.brandCampaign = createAsyncThunk(`${name}brandCampaign`, async () => {
    const res = await axios.get(url.brandCampaign, config.basicHeader);
    return res;
});
campaign.productCampaign = createAsyncThunk(`${name}productCampaign`, async () => {
    const res = await axios.get(url.productCampaign, config.basicHeader);
    return res;
});
export default campaign;
