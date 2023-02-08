import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconButton } from 'rsuite';
import Class from '../../../assets/css/card.course.module.css';

export default function Header(props) {
    const { buttonable, like, img, uuid } = props;
    return (
        <div className={Class.cover}>
            <Link to={`/workshop/${uuid}`}>
                <img src={img} alt="productImage" />
            </Link>
            {buttonable && (
                <div className={Class.heart}>
                    <IconButton circle size="sm" appearance="subtle" icon={<AiOutlineHeart />} />
                    <small>{like}</small>
                </div>
            )}
        </div>
    );
}
