/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Class from '../../assets/css/card.module.css';
import Header from './Header';
import Title from './Title';

export default function Basiccard(props) {
    const { title, children, iconify } = props;
    return (
        <div className={Class.container}>
            {iconify === true ? <Header title={title} /> : <Title title={title} />}
            {children}
        </div>
    );
}
