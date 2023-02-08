import React, { useCallback, useEffect, useState } from 'react';
import { Card, Col, Row,Container } from 'react-bootstrap';
import { Radio, RadioGroup } from 'rsuite';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/banner/Banner';
import Courses from '../components/learn/Courses';
import WorkshopTabs from '../components/learn/WorkshopTabs';
import Instructors from '../components/learn/Instructors';
import LearnCategory from '../components/learn/Categories';
export default function Learn() {
    const [workshoptitle, setWorkshopTitle] = useState(null);
    const workshopTitleHandler = (title) => setWorkshopTitle(title);
    const workshopView = () => {
        if (workshoptitle === 'all') {
            return <Courses />;
        }
        if (workshoptitle === 'instructor') {
            return <Instructors/>
        }
        if (workshoptitle === 'categories') {
            return <LearnCategory/>
        }
        return <Courses />;
    };
    return (
        <div className="my-2">
            {/* <Coursedetails /> */}
            <Banner />
            <Container className="mt-4">
                <div className='rounded p-1 py-2'>
                    <RadioGroup
                        name="radioList"
                        inline
                        appearance="picker"
                        defaultValue="all"
                        style={{ border: 'none' }}
                    >
                        <Radio value="all" onChange={() => workshopTitleHandler('all')}>
                            All
                        </Radio>
                        <Radio value="upcoming" onChange={() => workshopTitleHandler('instructor')}>
                            Instructor
                        </Radio>

                        <Radio value="recorded" onChange={() => workshopTitleHandler('categories')}>
                            Categories
                        </Radio>
                    </RadioGroup>
                </div>
            <div>{workshopView()}</div>
            </Container>
        </div>
    );
}
