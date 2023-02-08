/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Badge } from 'rsuite';
import Class from '../../assets/css/card.cart.module.css';
import { getCart } from '../../features/CartSlice';
import Mainbutton from '../buttons/Mainbutton';
import Dropdownitem from '../cart/Dropdownitem';

export default function Cart() {
    const { carts, subtotal } = useSelector((state) => state.cart);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // current path
    const currentPath = useLocation().pathname.slice(1);
    const checked =
        currentPath === 'cart' ||
        currentPath === 'address' ||
        currentPath === 'checkout' ||
        currentPath === 'payment';
    // handle cart route
    const handleCart = () => {
        navigate('/cart');
    };
    const getCartHandler = () => {
        if (!checked) {
            dispatch(getCart());
        }
        setShow(!show);
    };
    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);
    return (
        <Dropdown autoClose="outside">
            <Dropdown.Toggle
                id="dropdown-autoclose-true"
                variant="white"
                menuvariant="white"
                title="Cart"
                className={`${Class.caret} border-0`}
            >
                <Badge color="blue" content={carts?.length} onClick={getCartHandler}>
                    <BsCart className="fs-6" />
                </Badge>
            </Dropdown.Toggle>

            {!checked && show && (
                <Dropdown.Menu className={`ps-2 pe-2 pe-md-3 border ${Class.cart}`}>
                    <div className="d-flex justify-content-between border-bottom pb-2">
                        <Link
                            className="text-decoration-none border rounded-5 py-1 px-2 text-gray-soft text-sm"
                            to="/cart"
                        >
                            view cart
                        </Link>
                        <p className="text-gray-soft text-md ">
                            Total &nbsp;
                            <span className="fw-bold text-black text-md">Tk. {subtotal}</span>
                        </p>
                    </div>
                    <div className={Class.itemScroll}>
                        {carts?.map((cart) => (
                            <Dropdownitem
                                key={Math.random()}
                                title={cart.name}
                                img={cart.cover}
                                price={cart.price}
                                quantity={cart.quantity}
                                uuid={cart.uuid}
                            />
                        ))}
                    </div>
                    <div className="text-center py-2 w-100">
                        <Mainbutton
                            title="Checkout"
                            bgColor="#1C405D"
                            width={100}
                            onClick={handleCart}
                        />
                    </div>
                </Dropdown.Menu>
            )}
        </Dropdown>
    );
}
