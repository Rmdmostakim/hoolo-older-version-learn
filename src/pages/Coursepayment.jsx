import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../api/auth';
import course from '../api/course';
import Booking from '../components/course/payment/Booking';
import Order from '../components/course/payment/Order';
import PaymentPlaceholder from '../components/placeholders/Payment';
import { getProfile } from '../features/ProfileSlice';

export default function Coursepayment() {
    const { courseDetails, isLoading } = useSelector((state) => state.course);
    const {mobile} = useSelector((state)=>state.profile);
    const { uuid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(course.getCourseDetails(uuid));
        dispatch(getProfile());
        if(mobile){
            dispatch(auth.userRegByHoolo(`88${mobile}`));
        }
        
    }, [dispatch, uuid,mobile]);
    // handle Back
    const handleBack = () => {
        navigate(-1, { replace: true });
    };
    if (isLoading) {
        return <PaymentPlaceholder />;
    }

    return (
        <Container className="mt-2 pb-4">
            {/* cart title */}
            <Row className="g-0">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <div className="d-flex justify-content-between pt-4 pb-3">
                        <h2 className="fs-6 text-capitalize m-0 p-0 ms-md-3">Payment</h2>
                        <Button
                            className="bg-transparent border-0 text-black rounded-2 me-0"
                            onClick={handleBack}
                        >
                            <BsArrowLeft /> Back
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className="g-0 justify-content-center">
                {courseDetails && courseDetails.details.price === 0 && (
                    <Booking uuid={uuid} course={courseDetails} />
                )}
                { courseDetails && courseDetails.details.price > 0 && <Order uuid={uuid} course={courseDetails} />}
            </Row>
        </Container>
    );
}
