/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import CryptoJS from 'crypto-js';
// eslint-disable-next-line import/no-cycle
import config from '../api/config';

const helpers = {};
helpers.sentenceCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);

helpers.titleCase = (string) =>
    string.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

helpers.encrypt = (string) => CryptoJS.AES.encrypt(string, config.secretKey).toString();

helpers.decrypt = (string) =>
    CryptoJS.AES.decrypt(string, config.secretKey).toString(CryptoJS.enc.Utf8);

export default helpers;
