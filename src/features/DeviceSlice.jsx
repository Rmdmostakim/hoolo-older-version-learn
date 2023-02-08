/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const DeviceSlice = createSlice({
    name: 'device',
    initialState: {
        small: false,
        cardHeight: 400,
        navHeight: 0,
        bannerHeight: 0,
        mobileNavHeight: 0,
        muted: true,
        previousRoute: '/',
        learFixed:false,
    },
    reducers: {
        scrollTop: () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
        setDevice: (state, action) => {
            const { payload } = action;
            if (payload < 992) {
                state.small = true;
            } else {
                state.small = false;
            }
        },
        setCardHeight: (state, action) => {
            const { payload } = action;
            state.cardHeight = payload;
        },
        setNavHeight: (state, action) => {
            const { payload } = action;
            state.navHeight = payload;
        },
        setBannerHeight: (state, action) => {
            const { payload } = action;
            state.bannerHeight = payload;
        },
        setmobileNavHeight: (state, action) => {
            const { payload } = action;
            state.mobileNavHeight = payload;
        },
        setUnmute: (state) => {
            state.muted = !state.muted;
        },
        setPreviousRoute: (state, action) => {
            const route = action.payload;
            state.previousRoute = route;
        },
        setLearnFixed: (state,action)=>{
            state.learFixed = action.payload;
        }
    },
});
export const {
    setDevice,
    setCardHeight,
    setNavHeight,
    setBannerHeight,
    scrollTop,
    setmobileNavHeight,
    setUnmute,
    setPreviousRoute,
    setLearnFixed,
} = DeviceSlice.actions;
export default DeviceSlice.reducer;
