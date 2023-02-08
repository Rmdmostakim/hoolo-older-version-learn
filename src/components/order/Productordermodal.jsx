import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'rsuite';

function Productordermodal(props) {
    const {
        handleClose,
        open,
        modalName,
        message,
        icon,
        invoiceNumber,
        paymentID,
        trxID,
        shipping,
        taxes,
        amount,
    } = props;

    return (
        <Modal backdrop="static" open={open} onClose={handleClose} style={{ zIndex: '110000' }}>
            <Modal.Header className={modalName ? 'd-block' : 'd-none'}>
                <div className="d-flex justify-content-center">
                    <img
                        src={icon}
                        alt="success"
                        className="img-fluid"
                        style={{ width: '60px', height: '60px' }}
                    />
                </div>
                <Modal.Title className="text-center text-capitalize pt-3">
                    {message || null}
                </Modal.Title>
                {invoiceNumber ? (
                    <p className="text-center py-3 border-bottom">
                        Thank you for your purchase. Stay close with hoolo.live.
                    </p>
                ) : (
                    <p className="text-center py-3 border-bottom">
                        Thank you for your patience. Stay close with hoolo.live
                    </p>
                )}
            </Modal.Header>
            {invoiceNumber && (
                <Modal.Body>
                    <div className="d-grid gap-2 p-3 bg-white mx-0 mx-md-3 rounded-2">
                        <p className="text-soft-gray fw-bold text-center fs-6 pb-2">
                            ORDER SUMMARY
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <p>Order Code</p>
                            <p>#{invoiceNumber}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p>PaymentID</p>
                            <p>{paymentID}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p>Transaction ID</p>
                            <p>{trxID}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p>Amount</p>
                            <p>{amount} Tk</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p>Shipping</p>
                            <p>{shipping} Tk</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p>Taxes</p>
                            <p>{taxes} Tk</p>
                        </div>

                        <div className="d-flex justify-content-between align-items-center border-top pt-1 fs-6 text-gray-soft">
                            <p className="text-black fw-bold">Total</p>
                            <p className="text-black fw-bold">
                                BDT. {amount + shipping + taxes} TK
                            </p>
                        </div>
                    </div>
                </Modal.Body>
            )}

            <div
                className={
                    trxID
                        ? 'd-flex justify-content-between align-items-center w-100'
                        : 'd-flex justify-content-between align-items-center w-100 mt-2'
                }
            >
                <Link to="/" className="btn btn-success text-decoration-none">
                    Back to Home
                </Link>
                <Link to="/shop" className="btn btn-warning text-decoration-none text-white">
                    Close
                </Link>
            </div>
        </Modal>
    );
}

export default Productordermodal;
