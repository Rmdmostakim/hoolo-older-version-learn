import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { GrNotification } from 'react-icons/gr';
import { Badge } from 'rsuite';
import Class from '../../assets/css/card.cart.module.css';
import product from '../../assets/logo/hoolo.gif';
import Order from '../notifications/Order';

export default function Notification() {
    const data = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10];
    return (
        <Dropdown>
            <Dropdown.Toggle
                id="dropdown-autoclose-true"
                variant="white"
                menuvariant="white"
                title="Cart"
                className={`${Class.caret} border-0`}
            >
                <Badge color="yellow" content="0">
                    <GrNotification className="fs-6 text-gray-soft fw-normal" />
                </Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu className={`ps-2 pe-2 pe-md-3 border ${Class.cart}`}>
                {data?.slice(0, 1).map((index) => (
                    <Order key={index} title="Welcome to Hoolo.live" img={product} />
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}
