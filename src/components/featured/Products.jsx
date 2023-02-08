/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'rsuite';
import featured from '../../api/featured';
import Class from '../../assets/css/featured.module.css';
import Card from '../cards/Basiccard';
import Featurecard from '../cards/Featurecard';
import Category from '../placeholders/Category';

export default function Products(props) {
    const { title, iconify, circle } = props;
    const { products, isLoading } = useSelector((state) => state.featured);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!products) {
            dispatch(featured.products());
        }
    }, [dispatch, products]);
    const [showmore, setShowmore] = useState(false);
    const handleShowmore = () => setShowmore(!showmore);
    const view = () => {
        if (showmore) {
            return products?.map((data) => (
                <li key={data.uuid}>
                    <Featurecard
                        circle={circle}
                        title={data.product.name}
                        price={data.product.details.price}
                        img={data.product.details.cover.path}
                        uuid={data.product.uuid}
                        link="/product"
                        type="product"
                    />
                </li>
            ));
        }
        return products?.map((data, index) => {
            if (index < 4) {
                return (
                    <li key={data.uuid}>
                        <Featurecard
                            circle={circle}
                            title={data.product.name}
                            price={data.product.details.price}
                            img={data.product.details.cover.path}
                            uuid={data.product.uuid}
                            link="/product"
                            type="product"
                        />
                    </li>
                );
            }
            return null;
        });
    };
    return (
        <div className={Class.container}>
            <Card title={title} iconify={iconify}>
                {isLoading ? (
                    <Category graph="square" rows={1} />
                ) : (
                    <>
                        <ul>{view()}</ul>
                        <div className="text-center">
                            <Button appearance="subtle" onClick={handleShowmore}>
                                {showmore ? 'Show Less' : 'Show More'}
                            </Button>
                        </div>
                    </>
                )}
            </Card>
        </div>
    );
}
