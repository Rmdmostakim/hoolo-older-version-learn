import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Class from '../../assets/css/banner.module.css';
import banner from '../../assets/images/banner.png';
import { setBannerHeight } from '../../features/DeviceSlice';
import BannerPlaceholder from '../placeholders/Banner';

function Banner() {
    const ref = useRef();
    const data = [0, 1, 2];
    const { isLoading } = useSelector((state) => state.category);
    const dispatch = useDispatch();
    const bannerHeight = () => {
        const { clientHeight } = ref.current;
        dispatch(setBannerHeight(clientHeight));
    };
    useEffect(() => {
        window.addEventListener('scroll', bannerHeight);
        return () => {
            window.removeEventListener('scroll', bannerHeight);
        };
    });

    return (
        <div ref={ref}>
            {isLoading ? (
                <BannerPlaceholder />
            ) : (
                <Splide
                    options={{
                        autoplay: 'true',
                        arrows: false,
                        snap: true,
                        pagination: true,
                        perPage: 1,
                        gap: '1em',
                        cover: true,
                        type: 'loop',
                        fixedHeight: '100%',
                    }}
                >
                    {data.map((index) => (
                        <SplideSlide key={index}>
                            <div>
                                <img
                                    className={`${Class.height}`}
                                    style={{ width: '100%', objectFit: 'fill' }}
                                    src={banner}
                                    alt="demo"
                                />
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            )}
        </div>
    );
}
export default Banner;