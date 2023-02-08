import React from 'react';
import { Button } from 'rsuite';

export default function Summary({ name, course, clickHandler, id }) {
    return (
        <div className="d-grid gap-2 p-3 bg-white mx-0 mx-md-3 rounded-2">
            {name ? <p className="text-black fs-6 border-bottom pb-2">{name}</p> : null}
            <div className="d-flex justify-content-between align-items-center">
                <p>Number of Session</p>
                <p>{JSON.parse(course.session.schedule).length}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <p>Session Type</p>
                <p>One to Many</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <p>Schedule</p>
                <p>{JSON.parse(course.session.schedule)[0]}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <p>Taxes</p>
                <p>Tk. 00 </p>
            </div>

            <div className="d-flex justify-content-between align-items-center border-top pt-1">
                <p className="text-black fw-bold">Subtotal</p>
                <p className="text-black fw-bold">Tk. {course.details.price} </p>
            </div>
            <div className="pt-4">
                <Button
                    className="text-white px-4 me-1 shadow-lg w-100"
                    style={{ backgroundColor: 'rgb(28, 64, 93)' }}
                    id={id || null}
                    onClick={id ? null : clickHandler}
                >
                    Confirm Order
                </Button>
            </div>
        </div>
    );
}
