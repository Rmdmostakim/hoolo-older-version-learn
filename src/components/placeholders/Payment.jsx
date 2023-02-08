import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Placeholder } from 'rsuite';

function Payment() {
    const { small } = useSelector((state) => state.device);
    return (
        <Row className=" g-3 px-3 py-5">
            <Col md={12} lg={8}>
                {small ? (
                    <Row>
                        <Col xs={12} md={12}>
                            <Button className="bg-white p-2 border w-100 pt-2 pb-1 px-2">
                                <Placeholder.Graph active className="rounded-top" />
                            </Button>
                        </Col>
                    </Row>
                ) : (
                    <Row className="g-2">
                        <Col xs={6} md={4}>
                            <Button className="bg-white p-2 border w-100 pt-2 pb-1 px-2">
                                <Placeholder.Graph active className="rounded-top" />
                            </Button>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button className="bg-white p-2 border w-100 pt-2 pb-1 px-2">
                                <Placeholder.Graph active className="rounded-top" />
                            </Button>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button className="bg-white p-2 border w-100 pt-2 pb-1 px-2">
                                <Placeholder.Graph active className="rounded-top" />
                            </Button>
                        </Col>
                    </Row>
                )}
            </Col>
            <Col md={12} lg={4}>
                <div className="d-grid border p-2 bg-white p-2 rounded">
                    <Placeholder.Paragraph rows={2} rowHeight={10} />
                    <Placeholder.Paragraph rows={2} rowHeight={10} />
                    <Placeholder.Paragraph rows={2} rowHeight={10} />
                    <Placeholder.Paragraph rows={2} rowHeight={10} />
                    <Placeholder.Paragraph rows={2} rowHeight={10} />
                    <Placeholder.Paragraph rows={2} rowHeight={10} />
                    <Placeholder.Paragraph rows={2} rowHeight={10} />
                    <Placeholder.Paragraph rows={2} rowHeight={10} />
                    <Placeholder.Paragraph rows={2} rowHeight={10} />
                </div>
            </Col>
        </Row>
    );
}

export default Payment;
