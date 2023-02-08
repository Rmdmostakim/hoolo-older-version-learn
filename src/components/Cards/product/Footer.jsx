import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import { Button } from 'rsuite';
import Class from '../../../assets/css/card.product.module.css';

export default function CartButton(props) {
    const { counter, like, price, handleCart } = props;
    return (
        <div className={`${Class.footer} ${Class.flex}`}>
            {counter && (
                <div className={Class.counter}>
                    <AiFillHeart style={{ color: '#FE4C35' }} />
                    <small>{like}</small>
                </div>
            )}

            <Button appearance="subtle" className={Class.buttoncartblue} onClick={handleCart}>
                <div className={Class.flex}>
                    <div style={{ paddingBottom: '5px', fontSize: '18px' }}>
                        <BsCart3 />
                    </div>
                    <div style={{ paddingInline: '5px' }}>{price}TK</div>
                </div>
            </Button>
        </div>
    );
}
