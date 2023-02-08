import React from 'react';
import { Col } from 'react-bootstrap';
import { Placeholder } from 'rsuite';

function Product({ col }) {
    return col ? (
        <>
            <Col lg={col} md={6} sm={6} xs={6}>
                <div className="d-grid mt-2 bg-white rounded-2">
                    <Placeholder.Graph active className="rounded-top" />
                    <Placeholder.Paragraph
                        style={{ marginTop: 10 }}
                        rows={1}
                        className="pb-2 ps-2"
                    />
                </div>
            </Col>
            <Col lg={col} md={6} sm={6} xs={6}>
                <div className="d-grid mt-2 bg-white rounded-2">
                    <Placeholder.Graph active className="rounded-top" />
                    <Placeholder.Paragraph
                        style={{ marginTop: 10 }}
                        rows={1}
                        className="pb-2 ps-2"
                    />
                </div>
            </Col>
            <Col lg={col} md={6} sm={6} xs={6}>
                <div className="d-grid mt-2 bg-white rounded-2">
                    <Placeholder.Graph active className="rounded-top" />
                    <Placeholder.Paragraph
                        style={{ marginTop: 10 }}
                        rows={1}
                        className="pb-2 ps-2"
                    />
                </div>
            </Col>
            <Col lg={col} md={6} sm={6} xs={6}>
                <div className="d-grid mt-2 bg-white rounded-2">
                    <Placeholder.Graph active className="rounded-top" />
                    <Placeholder.Paragraph
                        style={{ marginTop: 10 }}
                        rows={1}
                        className="pb-2 ps-2"
                    />
                </div>
            </Col>
        </>
    ) : (
        <>
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
        </>
    );
}

export default Product;
