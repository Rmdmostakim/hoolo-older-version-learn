import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import course from '../api/course';
import Class from '../assets/css/coursepage.module.css';
import Banner from '../components/course/Banner';
import Details from '../components/course/Details';
import Infos from '../components/course/Infos';
import CoursedetailsPlaceholder from '../components/placeholders/Coursedetails';

export default function Course() {
    const { uuid } = useParams();
    const { small, navHeight } = useSelector((state) => state.device);
    const { courseDetails, isLoading } = useSelector((state) => state.course);
    const dispatch = useDispatch();
    const ref = useRef();
    const [fixable, setFixable] = useState(false);
    const scrollHandler = useCallback(() => {
        const position = window.pageYOffset;
        
        if( ref.current){
            const { clientHeight } = ref.current;
            if (position > clientHeight) {
                setFixable(true);
            } else {
                setFixable(false);
            }
        }
        
    },[]);
    useEffect(() => {
        dispatch(course.getCourseDetails(uuid));
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [dispatch, uuid, scrollHandler]);

    const style = {
        top: `${navHeight + 10}px`,
        zIndex: '10',
        position: 'fixed',
    };
    if (isLoading) {
        return <CoursedetailsPlaceholder />;
    }
    if (courseDetails) {
        return (
            <Container fluid>
                <div className={Class.container}>
                    <div ref={ref}>
                        <Banner
                            title={courseDetails.title}
                            instructor={courseDetails.instructor}
                            session={courseDetails.session}
                            cover={courseDetails.details.cover}
                        />
                    </div>
                    <div className="mt-3">
                        <p className="border-bottom border-dark">Class Details</p>
                    </div>
                    <div className="mt-2">
                        <Row>
                            <Col lg={9} md={12} sm={12} className="mb-3">
                                <Details
                                    profile={courseDetails.profile}
                                    instructor={courseDetails.instructor}
                                    session={courseDetails.session}
                                    details={courseDetails.details}
                                />
                            </Col>
                            <Col lg={3} md={12}>
                                <div style={!small && fixable ? style : null}>
                                    <Infos
                                        slot={courseDetails.slot}
                                        order={courseDetails.order_count}
                                        session={courseDetails.session}
                                        details={courseDetails.details}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        );
    }
}
