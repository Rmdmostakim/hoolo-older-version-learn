import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Coursecard from '../Cards/course/Card';
import ProductPlaceholder from '../placeholders/Product';

export default function Courses({ courses, isLoading }) {
    return (
        <Container className="mt-0 mb-5 mt-lg-1 mb-lg-3" fluid>
            <Row className="gx-2">
                {isLoading ? (
                    <ProductPlaceholder />
                ) : (
                    courses && courses.length>0 && courses.map((item) => (
                        <Col lg={3} md={6} sm={12} key={Math.random()}>
                            <Coursecard course={item} buttonable={false} counter={false} />
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
}
