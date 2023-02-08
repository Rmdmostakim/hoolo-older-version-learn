// eslint-disable-next-line import/no-cycle
import helpers from '../helpers/helpers';

const config = {};
config.baseUrl = process.env.REACT_APP_AUTH_URL;
config.appKey = process.env.REACT_APP_AUTH_KEY;
config.secretKey = process.env.REACT_APP_SECRET_KEY;
config.basicHeader = {
    headers: {
        'Content-Type': 'application/json',
        appkey: config.appKey,
    },
};
config.authHeader = (token) => {
    const header = {
        headers: {
            'Content-Type': 'application/json',
            appkey: config.appKey,
            token,
        },
    };
    return header;
};
config.token = () => {
    const session = localStorage.getItem('session');
    let user = null;
    if (session) {
        user = JSON.parse(helpers.decrypt(session));
    }
    return user.token;
};

export default config;
