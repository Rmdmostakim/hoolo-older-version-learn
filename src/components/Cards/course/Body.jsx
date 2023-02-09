/* eslint-disable no-unused-vars */
import React from 'react';
import { BsFillClockFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Class from '../../../assets/css/card.course.module.css';

export default function Body(props) {
    const { title, instructor, summary, timers, expired, uuid } = props;
    return (
        <div className={`${Class.description} d-grid gap-1`}>
            <Link to={`/workshop/${uuid}`} className={Class.title}>
                {title.length > 25 ? `${title.slice(0, 18)}...` : title}
            </Link>
            <br/>
            <small>
                By &nbsp;
                <Link to={`/instructor/${instructor.instructor_uuid}`} className="text-black-50">
                    {instructor.full_name}
                </Link>
            </small>
            <p className={Class.summary}>{summary.slice(0, 100)}</p>
            <p className="text-black-50" style={{ height: '30px' }}>
                <BsFillClockFill />
                {expired ? (
                    <small className="mx-1">Timeout</small>
                ) : (
                    <small className="mx-1">
                        Start in {timers.days !== 0 && `${timers.days} days`} &nbsp;
                        {timers.hours} :{timers.minutes}:{timers.seconds}
                    </small>
                )}
            </p>
        </div>
    );
}
