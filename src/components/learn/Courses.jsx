import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import course from '../../api/course';
import Coursecard from '../Cards/course/Card';
import ProductPlaceholder from '../placeholders/Product';

export default function Courses() {
    const { courses, isLoading } = useSelector((state) => state.course);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!courses) {
            dispatch(course.getAllCourses());
        }
    }, [dispatch, courses]);
    return (
        <Row className="gx-2">
            {isLoading ? (
                <ProductPlaceholder />
            ) : (
                courses && courses.map((item) => (
                    <Col lg={4} md={6} sm={12} key={Math.random()}>
                        <Coursecard course={item} buttonable={false} counter={false} />
                    </Col>
                ))
            )}
        </Row>
    );
}
