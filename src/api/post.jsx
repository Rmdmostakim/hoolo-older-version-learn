import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from './config';
import url from './url';

const name = 'post/';
const post = {};

post.getAllPosts = createAsyncThunk(`${name}getAllPosts`, async () => {
    const res = await axios.get(url.getAllPosts, config.basicHeader);
    return res;
});

post.getNextPage = createAsyncThunk(`${name}getNextPage`, async (path) => {
    const res = await axios.get(path, config.basicHeader);
    return res;
});

post.viewCounter = createAsyncThunk(`${name}viewCounter`, async (uuid) => {
    const res = await axios.post(url.viewCounter, { uuid }, config.authHeader(config.token()));
    return res;
});

post.shareCounter = createAsyncThunk(`${name}shareCounter`, async (uuid) => {
    const res = await axios.post(url.shareCounter, { uuid }, config.authHeader(config.token()));
    return res;
});

post.postComment = async (credentials) => {
    const res = await axios
        .post(url.postComment, credentials, config.authHeader(config.token()))
        .then((response) => response)
        .catch((error) => error.response);
    return res;
};

post.editComment = async (credentials) => {
    const res = await axios
        .post(url.editComment, credentials, config.authHeader(config.token()))
        .then((response) => response)
        .catch((error) => error.response);
    return res;
};

post.deleteComment = async (credentials) => {
    const res = await axios
        .post(url.deleteComment, credentials, config.authHeader(config.token()))
        .then((response) => response)
        .catch((error) => error.response);
    return res;
};

post.postLikes = async (credentials) => {
    const res = await axios
        .post(url.postLikes, credentials, config.authHeader(config.token()))
        .then((response) => response)
        .catch((error) => error.response);
    return res;
};

export default post;
