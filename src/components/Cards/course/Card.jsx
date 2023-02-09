import React, { useEffect, useState } from 'react';
import Class from '../../../assets/css/card.course.module.css';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

export default function Card(props) {
    const { course, buttonable, counter } = props;
    const { uuid, title, details, like, instructor, session } = course;
    const [expired, setExpired] = useState(false);
    const [timers, setTimers] = useState({ days: '0', hours: '0', minutes: '0', seconds: '0' });
    const timer = () => {
        const now = new Date().getTime();
        const start = new Date(JSON.parse(session.schedule)[0]).getTime();
        const countDown = start - now;
        const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
        const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
        setTimers({ days, hours, minutes, seconds });
        if (countDown <= 0) {
            setExpired(true);
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            timer();
        }, 1000);
        return () => clearInterval(interval);
    });
    return (
        <div className={`${Class.container} me-1`}>
            <Header buttonable={buttonable} like={like} img={details.cover.path} uuid={uuid} />
            <Body
                uuid={uuid}
                title={title}
                instructor={instructor}
                summary={details.summary}
                timers={timers}
                expired={expired}
            />
            <Footer
                uuid={uuid}
                counter={counter}
                like={like}
                price={details.price}
                expired={expired}
            />
        </div>
    );
}
