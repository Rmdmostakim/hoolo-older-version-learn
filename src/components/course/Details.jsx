import React from 'react';
import { Avatar } from 'rsuite';
import Class from '../../assets/css/course.details.module.css';

export default function Details({ instructor, profile, session, details }) {
    const { user_name: userName, full_name: fullName, about_me: aboutMe } = instructor;
    return (
        <div className={`${Class.instructor} rounded p-2`}>
            <h6>About Instructor</h6>
            <div className={`${Class.intructorHeading} mt-2`}>
                <div className="mt-1">
                    <Avatar circle src={profile.path} alt={userName} />
                </div>
                <div className="mx-4">
                    <p className="fw-bold h6">{`${fullName} ${userName}`}</p>
                </div>
            </div>
            <div className={`${Class.textJustify} border-bottom border-dark pb-2`}>
                <p>{aboutMe}</p>
            </div>
            <div className="mt-2">
                <h6>Workshop Schedule</h6>
                <div className="border-bottom border-dark pb-2 mt-2">
                    {JSON.parse(session.schedule).map((data, index) => (
                        <div key={Math.random()}>
                            <small>
                                <span className="fw-bold">Session {index + 1} : </span>
                                {data}
                            </small>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-2">
                <h6>Description</h6>
                <div className="pb-2 mt-2">
                    <div className="mb-2">
                        <p className={`${Class.textJustify} text-capitalize`}>{details.summary}</p>
                    </div>
                    {JSON.parse(session.details).map((data) => (
                        <div className="mb-2" key={Math.random()}>
                            <p className={`${Class.textJustify} text-capitalize`}>{data}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
