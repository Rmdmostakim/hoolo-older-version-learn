/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import instructor from '../api/instructor';
import bannerc from '../assets/images/bannerc.png';
import Instractorbanner from '../components/instructor/Instractorbanner';
import Instractortabs from '../components/instructor/Instractortabs';

export default function Instructor() {
    const [tabElement, setTabElement] = useState('workshops');
    const { uuid } = useParams();
    const dispatch = useDispatch();
    const {
        isLoading,
        isError,
        instructor: instructorInfo,
        courses,
        nextPage,
    } = useSelector((state) => state.instructor);
    useEffect(() => {
        dispatch(instructor.getInstructorInfo(uuid));
        dispatch(instructor.getInstructorCourses(uuid));
    }, [uuid, dispatch]);
    console.log(instructorInfo);

    return (
        <div>
            {instructorInfo && <Instractorbanner
                bannerimg={bannerc}
                dp={instructorInfo.profile.path}
                name={instructorInfo.user_name}
                follower="0"
            />}
            <Instractortabs setTabElement={setTabElement} tabElement={tabElement} />
        </div>
    );
}