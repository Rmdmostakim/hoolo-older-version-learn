import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Placeholder } from 'rsuite';
import Class from '../../assets/css/productpage.module.css';

function Productdetails() {
    return (
        <Row style={{ minHeight: '80vh' }} className="bg-white ms-md-2 me-md-2 rounded gx-1">
            <Col sm={12} md={12} lg={1} className="d-none d-lg-block">
                {/* show product images on desktop devices */}
                <div className={`d-none d-grid my-2 d-lg-block ${Class.scrollY} ${Class.imgList}`}>
                    <Placeholder.Graph active className="rounded-top" />
                    <Placeholder.Graph active className="rounded-top" />
                    <Placeholder.Graph active className="rounded-top" />
                </div>
            </Col>
            <Col sm={12} md={12} lg={11}>
                <Row className="gx-2">
                    <Col sm={12} md={12} lg={5} className="px-2 py-1">
                        {/* product feture image */}
                        <div
                            className="d-flex w-100 h-100 overflow-hidden mt-1"
                            style={{ maxHeight: '540px' }}
                        >
                            <Placeholder.Graph active className="rounded-top" height={540} />
                        </div>
                        {/* show product images on mobile devices */}
                        <div
                            className={`d-flex overflow-auto gap-1 d-block d-lg-none py-2 ${Class.scrollX}`}
                        >
                            <Placeholder.Graph active className="rounded-top" />
                            <Placeholder.Graph active className="rounded-top" />
                            <Placeholder.Graph active className="rounded-top" />
                        </div>
                    </Col>
                    {/* product Description */}
                    <Col sm={12} md={12} lg={7}>
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

export default Productdetails;
