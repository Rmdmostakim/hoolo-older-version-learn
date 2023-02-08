import React from 'react';
import { Link } from 'react-router-dom';
import Class from '../../../assets/css/card.product.module.css';

export default function Body(props) {
    const { title, uuid } = props;
    return (
        <div className={Class.description}>
            <Link to={`/product/${uuid}`} className="fs-6 text-dark fw-bold">
                {title.length > 20 ? `${title.slice(0, 19)}...` : title}
            </Link>
        </div>
    );
}
