/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import { BsBookmark } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';
import Class from '../../assets/css/card.feature.module.css';

export default function Featurecard(props) {
    const { circle, title, img, price, uuid, link, type } = props;
    const trimTitle = useCallback(() => {
        const len = title.length;
        if (len > 20) {
            return `${title.substring(0, 15)}....`;
        }
        return title;
    }, [title]);

    if (type === 'product') {
        return (
            <div className={Class.container}>
                <div className={Class.header}>
                    <Link to={`${link}/${uuid}`}>
                        <img
                            src={img}
                            alt="product"
                            className={circle ? Class.circle : Class.rounded}
                        />
                    </Link>
                </div>
                <div className={Class.title}>
                    <div>
                        <Link to={`${link}/${uuid}`}>
                            <p>{trimTitle()}</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={`${link}/${uuid}`}>
                            <small>Tk {price}</small>
                        </Link>
                    </div>
                </div>
                <div className={Class.bookmark}>
                    <Button appearance="subtle" size="sm">
                        <BsBookmark />
                    </Button>
                </div>
            </div>
        );
    }
    if (type === 'instructor' || type === 'brand') {
        return (
            <div className={Class.container}>
                <div className={Class.header}>
                    <Link to={`${link}/${uuid}`}>
                        <img
                            src={img}
                            alt="product"
                            className={circle ? Class.circle : Class.rounded}
                        />
                    </Link>
                </div>
                <div className={Class.title}>
                    <div>
                        <Link to={`${link}/${uuid}`}>
                            <p>{trimTitle()}</p>
                        </Link>
                    </div>
                </div>
                <div className={Class.bookmark}>
                    <Button appearance="subtle" size="sm">
                        <BsBookmark />
                    </Button>
                </div>
            </div>
        );
    }
    return null;
}
