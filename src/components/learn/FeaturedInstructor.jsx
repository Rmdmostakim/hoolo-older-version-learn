import React from 'react';
import { useSelector } from 'react-redux';
import Instructor from '../../components/featured/Instructors';
import Class from './featured.module.css';
export default function FeaturedInstructor() {
    const { small, navHeight, bannerHeight,learFixed } = useSelector((state) => state.device);
    if(small){
        return null;
    }
    const style = {
        top: `${navHeight}px`,
        zIndex: '10',
        position:'fixed',
    };
    const scrollable = {
        height:'85vh',
        overflowY:'scroll',
    }
    return (
        <div
            className={learFixed ? 'mt-1' : undefined}
            style={learFixed ? style : null}
        >
            <div className={Class.container}>
                <Instructor
                    title="Featured Instructor"
                    circle
                    iconify={false}
                />
            </div>
        </div>
    )
}
