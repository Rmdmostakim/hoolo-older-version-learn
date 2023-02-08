import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import course from '../../../api/course';
import close from '../../../assets/images/close.png';
import info from '../../../assets/images/info.png';
import success from '../../../assets/images/success.png';
import Ordermodal from '../../order/Ordermodal';
import Summary from './Summary';

export default function Booking({ uuid, course: details }) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleClose = () => navigate(-1, { replace: false });
    const [icon, setIcon] = useState(null);
    const [message, setMessage] = useState(null);

    const confirmBooking = async () => {
        const res = await course.courseBooking(uuid);
        if (res.status === 201) {
            setIcon(success);
            setMessage('Booking confirmed');
            setOpen(true);
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
    };
    return (
        <>
            <Summary
                name="Workshop Booking"
                course={details}
                btnName="Confirm Booking"
                clickHandler={confirmBooking}
            />
            <Ordermodal
                open={open}
                handleClose={handleClose}
                setOpen={setOpen}
                modalName={message}
                message={message}
                icon={icon}
                invoiceNumber={null}
                paymentID={null}
                trxID={null}
                Shipping={null}
                taxes={0}
                amount={0}
            />
        </>
    );
}
