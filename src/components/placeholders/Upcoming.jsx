import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Placeholder } from 'rsuite';

function Upcoming() {
    const { small } = useSelector((state) => state.device);
    return (
        <div className="d-grid my-2 p-2 bg-white rounded-2">
            {!small ? (
                <Row className="g-2">
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <div className="border rounded-2 px-1">
                            <Placeholder.Paragraph
                                graph="circle"
                                rows={1}
                                style={{ marginTop: '5px' }}
                            />
                            <Placeholder.Graph active className="rounded mt-1" />
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <div className="border rounded-2 px-1">
                            <Placeholder.Paragraph
                                graph="circle"
                                rows={1}
                                style={{ marginTop: '5px' }}
                            />
                            <Placeholder.Graph active className="rounded mt-1" />
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <div className="border rounded-2 px-1">
                            <Placeholder.Paragraph
                                graph="circle"
                                rows={1}
                                style={{ marginTop: '5px' }}
                            />
                            <Placeholder.Graph active className="rounded mt-1" />
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <div className="border rounded-2 px-1">
                            <Placeholder.Paragraph
                                graph="circle"
                                rows={1}
                                style={{ marginTop: '5px' }}
                            />
                            <Placeholder.Graph active className="rounded mt-1" />
                        </div>
                    </Col>
                </Row>
            ) : (
                <Row className="g-2">
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <div className="border rounded-2 px-1">
                            <Placeholder.Paragraph
                                graph="circle"
                                rows={1}
                                style={{ marginTop: '5px' }}
                            />
                            <Placeholder.Graph active className="rounded mt-1" />
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <div className="border rounded-2 px-1">
                            <Placeholder.Paragraph
                                graph="circle"
                                rows={1}
                                style={{ marginTop: '5px' }}
                            />
                            <Placeholder.Graph active className="rounded mt-1" />
                        </div>
                    </Col>
                </Row>
            )}
        </div>
    );
}

export default Upcoming;
