/* eslint-disable no-undef */
import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import course from '../../../api/course';
import close from '../../../assets/images/close.png';
import info from '../../../assets/images/info.png';
import success from '../../../assets/images/success.png';
import Ordermodal from '../../order/Ordermodal';
import Paymentoption from './Paymentoption';
import Summary from './Summary';

export default function Order({ uuid, course: details }) {
    const { selectedPaymentMethod } = useSelector((state) => state.cart);
    const navigate = useNavigate();
    // modal handler
    const [open, setOpen] = useState(false);
    const [icon, setIcon] = useState(null);
    const [message, setMessage] = useState(null);
    const [amount, setAmount] = useState(null);
    const [invoiceNumber, setInvoiceNumber] = useState(null);
    const [paymentID, setPaymentID] = useState(null);
    const [trxID, setTrxID] = useState(null);
    const [shipping, setShipping] = useState(0);
    const [taxes, setTaxes] = useState(0);
    // payment handler
    const handleClose = () => navigate(-1, { replace: false });
    const [confirm, setConfirm] = useState(false);
    const proceedTopayment = () => {
        if (!selectedPaymentMethod) {
            toast.error('Please select a payment method');
        } else {
            setConfirm(true);
        }
    };
    const paymentByBkash = useCallback(() => {
        let paymentId = null;
        bKash.init({
            paymentMode: 'checkout',
            paymentRequest: {
                uuid,
                amount: details.details.price,
            },
            async createRequest(request) {
                const res = await course.courseBkashOrder(request.uuid);
                if (res.status === 200) {
                    paymentId = res.data.response.paymentID;
                    bKash.create().onSuccess(res.data.response);
                }
                if (res.status === 204) {
                    setIcon(close);
                    setMessage('Room is not available');
                    setOpen(true);
                }
                if (res.status === 302) {
                    setIcon(info);
                    setMessage('Already in purchase');
                    setOpen(true);
                }
                if (res.status === 406) {
                    setIcon(close);
                    setMessage('Wrong process');
                    setOpen(true);
                }
                if (res.status === 500) {
                    setIcon(close);
                    setMessage('Network error');
                    setOpen(true);
                }
            },
            async executeRequestOnAuthorization() {
                const res = await course.courseBkashExecute(paymentId);
                if (res.status === 201) {
                    setIcon(success);
                    setMessage(res.data.message);
                    setAmount(res.data.response.amount);
                    setInvoiceNumber(res.data.response.merchantInvoiceNumber);
                    setPaymentID(res.data.response.paymentID);
                    setTrxID(res.data.response.trxID);
                    setShipping(0);
                    setTaxes(0);
                    setOpen(true);
                }
                if (res.status === 402) {
                    setIcon(close);
                    setMessage('Insufficient Balance');
                    setOpen(true);
                }
                if (res.status === 429) {
                    setIcon(close);
                    setMessage('Duplicate Transaction');
                    setOpen(true);
                }
                if (res.status === 500) {
                    setIcon(close);
                    setMessage('Network Failed');
                    setOpen(true);
                }
                console.log(res);
            },
            async onClose() {
                const res = await course.courseBkashCancel(paymentId);
                if (res.status === 200) {
                    setIcon(close);
                    setMessage('Order cancelled');
                    setOpen(true);
                }
                if (res.status === 500) {
                    setIcon(close);
                    setMessage('Network Failed');
                    setOpen(true);
                }
            },
        });
    }, [uuid, details]);

    useEffect(() => {
        if (confirm && selectedPaymentMethod === 'bkash') {
            paymentByBkash();
        }
    }, [paymentByBkash, confirm, selectedPaymentMethod]);

    return (
        <>
                {!confirm && (
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="d-grid gap-2 p-3 bg-white mx-0 mx-md-3 rounded-2">
                            <p className="fs-5 text-capitalize ms-0 border-bottom pb-2">
                                Select Payment Option
                            </p>
                            <Paymentoption proceedTopayment={proceedTopayment} />
                        </div>
                    </Col>
                )}
                {confirm && (
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Summary name="Workshop Order" course={details} id="bKash_button" />
                    </Col>
                )}
            <Ordermodal
                open={open}
                handleClose={handleClose}
                setOpen={setOpen}
                modalName={message}
                message={message}
                icon={icon}
                invoiceNumber={invoiceNumber}
                paymentID={paymentID}
                trxID={trxID}
                Shipping={shipping}
                taxes={taxes}
                amount={amount}
            />
        </>
    );
}
