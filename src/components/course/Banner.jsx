import React from 'react';
import { Divider } from 'rsuite';
import Class from '../../assets/css/course.banner.module.css';

export default function Banner({ title, instructor, session, cover }) {
    const { full_name: fullName, user_name: userName } = instructor;
    const start = new Date(JSON.parse(session.schedule)[0]);
    return (
        <div className={Class.container}>
            <div className={`${Class.bannerInfo} p-3`}>
                <div className=" fw-bold text-light">
                    {`${start.toLocaleString('default', { month: 'short' })} ${start.getDate()}`}
                    <Divider vertical style={{ width: '2px' }} />
                    {start.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    })}
                </div>
                <div>
                    <p className="fw-bold text-light fs-3">{title}</p>
                </div>
                <div>
                    <p className="fw-bold text-light">By {`${fullName} ${userName}`}</p>
                </div>
            </div>
            <div className={Class.cover}>
                <img className="w-100" src={cover.path} alt={title} />
            </div>
        </div>
    );
}
