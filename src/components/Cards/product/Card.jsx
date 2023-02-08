/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch } from 'react-redux';
import Class from '../../../assets/css/card.product.module.css';
import { addCart } from '../../../features/CartSlice';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

export default function Card(props) {
    const { product, buttonable, counter } = props;
    const { uuid, name, details, like } = product;
    const dispatch = useDispatch();
    // cart data
    const data = {
        uuid: details?.product_uuid,
        name,
        price: details?.price,
        cover: details?.cover.path,
        quantity: 1,
        stock: details?.stock,
    };
    // handle add to cart
    const handleCart = () => {
        dispatch(addCart(data));
    };

    return (
        <div className={Class.container}>
            <Header
                buttonable={buttonable}
                like={like}
                cover={details?.cover.path}
                alt={name}
                uuid={uuid}
            />
            <Body title={name} uuid={uuid} />
            <Footer
                counter={counter}
                like={like || 0}
                price={details?.price}
                handleCart={handleCart}
            />
        </div>
    );
}
