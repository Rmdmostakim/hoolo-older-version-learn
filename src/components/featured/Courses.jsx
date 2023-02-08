import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'rsuite';
import featured from '../../api/featured';
import Class from '../../assets/css/featured.module.css';
import Card from '../Cards/Basiccard';
import Featurecard from '../Cards/Featurecard';
import Category from '../placeholders/Category';

export default function Courses(props) {
    const { courses, isLoading } = useSelector((state) => state.featured);
    const { title, iconify, circle } = props;
    const dispatch = useDispatch();
    useEffect(() => {
        if (!courses) {
            dispatch(featured.courses());
        }
    }, [dispatch, courses]);

    const [showmore, setShowmore] = useState(false);
    const handleShowmore = () => setShowmore(!showmore);
    const view = () => {
        if (showmore) {
            return courses?.map((data) => (
                <li key={data.uuid}>
                    <Featurecard
                        circle={circle}
                        title={data?.course?.title}
                        price={data?.course?.details?.price}
                        img={data?.course?.details?.cover?.path}
                        uuid={data?.course?.uuid}
                        link="/course"
                        type="product"
                    />
                </li>
            ));
        }
        return courses?.map((data, index) => {
            if (index < 4) {
                return (
                    <li key={data.uuid}>
                        <Featurecard
                            circle={circle}
                            title={data?.course?.title}
                            price={data?.course?.details?.price}
                            img={data?.course?.details?.cover?.path}
                            uuid={data?.course?.uuid}
                            link="/course"
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
