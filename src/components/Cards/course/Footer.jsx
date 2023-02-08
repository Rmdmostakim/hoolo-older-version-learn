import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsCart3, BsCartXFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Button } from 'rsuite';
import Class from '../../../assets/css/card.course.module.css';

export default function CartButton(props) {
    const { uuid, counter, like, price, expired } = props;

    const navigate = useNavigate();
    const courseBuyHandler = () => navigate(`/workshop/payment/${uuid}`);
    return (
        <div className={`${Class.footer} ${Class.flex}`}>
            {counter && (
                <div className={Class.counter}>
                    <AiFillHeart style={{ color: '#FE4C35' }} />
                    <small>{like}</small>
                </div>
            )}
            {expired ? (
                <Button appearance="subtle" className={Class.buttoncartblue} style={{ color:'white' }}>
                    <div className={Class.flex}>
                        <div style={{ paddingBottom: '5px', fontSize: '18px' }}>
                            <BsCartXFill />
                        </div>
                        <div style={{ paddingInline: '5px' }}>Ended</div>
                    </div>
                </Button>
            ) : (
                <Button
                    appearance="subtle"
                    className={Class.buttoncartblue}
                    onClick={courseBuyHandler}
                    style={{ color:'white' }}
                >
                    <div className={Class.flex}>
                        <div style={{ paddingBottom: '5px', fontSize: '18px' }}>
                            <BsCart3 />
                        </div>
                        <div style={{ paddingInline: '5px',color:'white' }}>{price}TK</div>
                    </div>
                </Button>
            )}
        </div>
    );
}
