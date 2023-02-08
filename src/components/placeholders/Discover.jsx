import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Placeholder } from 'rsuite';

function Discover({ column }) {
    return column === 4 ? (
        <Row className="gx-2 pt-3">
            <Col xs={6} lg={column}>
                <Placeholder.Graph className="rounded" />
            </Col>
            <Col xs={6} lg={column}>
                <Placeholder.Graph className="rounded" />
            </Col>
            <Col xs={6} lg={column}>
                <Placeholder.Graph className="rounded" />
            </Col>
            <Col xs={6} lg={column}>
                <Placeholder.Graph className="rounded" />
            </Col>
        </Row>
    ) : (
        <Row className="gx-2 pt-3">
            <Col xs={6} lg={3}>
                <Placeholder.Graph className="rounded" />
            </Col>
            <Col xs={6} lg={3}>
                <Placeholder.Graph className="rounded" />
            </Col>
            <Col xs={6} lg={3}>
                <Placeholder.Graph className="rounded" />
            </Col>
            <Col xs={6} lg={3}>
                <Placeholder.Graph className="rounded" />
            </Col>
        </Row>
    );
}

export default Discover;
