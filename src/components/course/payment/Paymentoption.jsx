import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Class from '../../../assets/css/payment.module.css';
import bkash from '../../../assets/images/bkash.png';
import { selectPaymentMethod } from '../../../features/CartSlice';
// import ssl from '../../assets/images/ssl.png';

function Paymentoption({ proceedTopayment }) {
    const { selectedPaymentMethod } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const paymentMethodHandler = (value) => {
        dispatch(selectPaymentMethod(value));
    };
    return (
        <>
            <Row className="g-2 justify-content-center">
                <Col xs={6} md={6}>
                    <Button
                        className={
                            selectedPaymentMethod === 'bkash'
                                ? `bg-white border w-100 ${Class.active}`
                                : 'bg-white border w-100'
                        }
                        onClick={() => paymentMethodHandler('bkash')}
                    >
                        <img
                            src={bkash}
                            alt="category img"
                            className="img-fluid w-100"
                            style={{ height: '150px' }}
                        />
                    </Button>
                </Col>
                {/* <Col xs={6} md={6}>
            <Button
                className={`bg-white border-0  w-100 ${Class.active}`}
                // onClick={activeHandler}
            >
                <img src={ssl} alt="category img" className="img-fluid w-100" />
            </Button>
        </Col> */}
            </Row>
            <div className="pt-4">
                <Button
                    className="text-white px-4 me-1 shadow-lg w-100"
                    style={{ backgroundColor: 'rgb(28, 64, 93)' }}
                    onClick={proceedTopayment}
                >
                    Proceed to Payment
                </Button>
            </div>
        </>
    );
}

export default Paymentoption;
