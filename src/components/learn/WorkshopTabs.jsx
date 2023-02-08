/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Radio, RadioGroup } from 'rsuite';

export default function WorkshopTabs() {
    const [workshoptitle, setWorkshopTitle] = useState(null);
    const workshopTitleHandler = (title) => setWorkshopTitle(title);
    const workshopView = () => {
        if (workshoptitle === 'ended') {
            return <h1>ended</h1>;
        }
        if (workshoptitle === 'recorded') {
            return <h1>recorded</h1>;
        }
        return (
            <Row>
                <Col md={4} sm={6} xs={12}>
                    <h1>workshp</h1>
                </Col>
            </Row>
        );
    };
    return (
        <div>
            <RadioGroup
                name="radioList"
                inline
                appearance="picker"
                defaultValue="upcoming"
                style={{ border: 'none' }}
            >
                <Radio value="upcoming" onChange={() => workshopTitleHandler('upcoming')}>
                    Upcoming
                </Radio>
                <Radio value="ended" onChange={() => workshopTitleHandler('ended')}>
                    Ended
                </Radio>
                <Radio value="recorded" onChange={() => workshopTitleHandler('recorded')}>
                    Recorded
                </Radio>
            </RadioGroup>
            <div>{workshopView()}</div>
        </div>
    );
}
