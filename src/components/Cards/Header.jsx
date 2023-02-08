import React from 'react';
import { SlOptionsVertical } from 'react-icons/sl';
import Class from '../../assets/css/card.module.css';

function Header(props) {
    const { title } = props;
    return (
        <div className={Class.header}>
            <div>
                <p>{title}</p>
            </div>
            <div>
                <SlOptionsVertical />
            </div>
        </div>
    );
}

export default Header;
