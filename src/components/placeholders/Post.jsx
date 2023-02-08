import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Placeholder } from 'rsuite';

function Post() {
    return (
        <div className="d-grid mt-2 bg-white rounded-2">
            <Placeholder.Paragraph graph="circle" rows={1} style={{ marginTop: '5px' }} />
            <Placeholder.Graph active className="rounded" style={{ marginTop: '5px' }} />
            <Row className="gx-3">
                <Col lg={4} md={6} sm={6} xs={6}>
                    <div className="d-grid mt-2 bg-white rounded-2">
                        <Placeholder.Graph active className="rounded-top" />
                        <Placeholder.Paragraph
                            style={{ marginTop: 10 }}
                            rows={1}
                            className="pb-2 ps-2"
                        />
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={6}>
                    <div className="d-grid mt-2 bg-white rounded-2">
                        <Placeholder.Graph active className="rounded-top" />
                        <Placeholder.Paragraph
                            style={{ marginTop: 10 }}
                            rows={1}
                            className="pb-2 ps-2"
                        />
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={6}>
                    <div className="d-grid mt-2 bg-white rounded-2">
                        <Placeholder.Graph active className="rounded-top" />
                        <Placeholder.Paragraph
                            style={{ marginTop: 10 }}
                            rows={1}
                            className="pb-2 ps-2"
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Post;
