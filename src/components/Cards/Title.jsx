import React from 'react';
import Class from '../../assets/css/card.module.css';

function Title(props) {
    const { title } = props;
    return <h6 className={Class.title}>{title}</h6>;
}

export default Title;
