import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Placeholder } from 'rsuite';

function Coursedetails() {
    return (
        <Row style={{ minHeight: '80vh' }} className="bg-white ms-md-2 me-md-2 rounded gx-1">
            <Col md={12}>
                <div className="p-2 mt-1">
                    <Placeholder.Graph active className="rounded" height={300} />
                </div>
            </Col>
            <Col md={12}>
                <Row className="gx-2">
                    <Col sm={12} md={12} lg={8} className="py-1">
                        <div className="ps-0 ps-lg-3 w-25">
                            <Placeholder.Paragraph rows={1} rowHeight={15} />
                        </div>
                        <div className="d-flex flex-row justify-content-start align-items-center">
                            <Placeholder.Paragraph graph="circle" rowHeight={35} />
                            <div className="d-grid w-100 pt-4">
                                <Placeholder.Paragraph rows={1} rowHeight={15} />
                                <Placeholder.Paragraph rows={1} rowHeight={10} />
                                <Placeholder.Paragraph rows={2} rowHeight={10} />
                                <Placeholder.Paragraph rows={2} rowHeight={10} />
                            </div>
                        </div>
                        <div className="ps-0 ps-lg-2 pt-4 w-50">
                            <Placeholder.Paragraph rows={2} rowHeight={10} />
                        </div>
                        <div className="ps-0 ps-lg-2 pt-4 w-50">
                            <Placeholder.Paragraph rows={1} rowHeight={15} />
                            <Placeholder.Paragraph rows={2} rowHeight={10} />
                            <Placeholder.Paragraph rows={2} rowHeight={10} />
                            <Placeholder.Paragraph rows={2} rowHeight={10} />
                        </div>
                    </Col>
                    {/* product Description */}
                    <Col sm={12} md={12} lg={4}>
                        <Placeholder.Paragraph rows={1} rowHeight={15} />
                        <Placeholder.Paragraph rows={1} rowHeight={10} />
                        <Placeholder.Paragraph rows={2} rowHeight={10} />
                        <Placeholder.Paragraph rows={2} rowHeight={10} />
                        <Placeholder.Paragraph rows={2} rowHeight={10} />
                        <Placeholder.Paragraph rows={2} rowHeight={10} />
                        <Placeholder.Paragraph rows={2} rowHeight={10} />
                        <Placeholder.Paragraph rows={2} rowHeight={10} />
                        <Placeholder.Paragraph rows={2} rowHeight={10} />
                        <Placeholder.Paragraph rows={2} rowHeight={10} />
                        <Placeholder.Paragraph rows={2} rowHeight={10} />
                        <Placeholder.Paragraph rows={2} rowHeight={10} />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Coursedetails;
