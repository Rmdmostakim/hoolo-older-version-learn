import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import course from '../../api/course';
import Coursecard from '../cards/course/Card';
import Emptycart from '../emptycart/Emptycart';
import ProductPlaceholder from '../placeholders/Product';

export default function Usercourse() {
    const { userCourses, isLoading } = useSelector((state) => state.course);

    const dispatch = useDispatch();
    useEffect(() => {
        if (!userCourses) {
            dispatch(course.getUserCourses());
        }
    }, [dispatch, userCourses]);
    return (
        <Row className="gx-2">
            {isLoading && <ProductPlaceholder />}
            {!isLoading && userCourses?.length > 0 ? (
                userCourses?.map((item) => (
                    <Col lg={4} md={6} sm={12} key={item.uuid}>
                        <Coursecard course={item.course} buttonable={false} counter={false} />
                    </Col>
                ))
            ) : (
                <Emptycart />
            )}
        </Row>
    );
}
