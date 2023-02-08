import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import React, { useEffect, useState } from 'react';
import Class from '../../assets/css/card.upcoming.module.css';

export default function Upcomingcard({ course, modalHandler }) {
    const { profile, details, instructor, session } = course;
    const [ended, setEnded] = useState(false);
    useEffect(() => {
        const now = new Date().getTime();
        const start = new Date(JSON.parse(session.schedule)[0]).getTime();
        const countDown = start - now;
        if (countDown <= 0) {
            setEnded(true);
        }
    }, [session]);
    return (
        <div className={Class.container} role="button" tabIndex={0} onClick={modalHandler}>
            <div className={Class.header}>
                <div className={Class.title}>{ended ? 'Ended' : 'Upcoming'}</div>
            </div>
            <div className={Class.body}>
                <img src={details.cover.path} alt={instructor.user_name} />
            </div>
            <div className={Class.footer}>
                <div className={Class.logo}>
                    <img src={profile.path} alt={instructor.user_name} />
                    <b>{instructor.user_name}</b>
                </div>
            </div>
        </div>
    );
}
