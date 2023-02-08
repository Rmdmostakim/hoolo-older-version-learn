import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'rsuite';
import Class from '../../assets/css/featured.module.css';
import women from '../../assets/images/women.png';
import Card from '../Cards/Basiccard';
import Featurecard from '../Cards/Featurecard';
import Category from '../placeholders/Category';

export default function Instructors(props) {
    const { title, iconify, circle } = props;
    const data = [1, 2, 3, 4, 5, 6, 8, 9, 10];
    const { isLoading } = useSelector((state) => state.category);
    const [showmore, setShowmore] = useState(false);
    const handleShowmore = () => setShowmore(!showmore);
    const view = () => {
        if (showmore) {
            return data.map((index) => (
                <li key={index}>
                    <Featurecard
                        circle={circle}
                        title="Demo product 1"
                        img={women}
                        uuid="12345"
                        link="/instructor"
                        type="instructor"
                    />
                </li>
            ));
        }
        return data.map((index) => {
            if (index < 4) {
                return (
                    <li key={index}>
                        <Featurecard
                            circle={circle}
                            title="Demo product 1"
                            img={women}
                            uuid="12345"
                            link="/instructor"
                            type="instructor"
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
                    <Category graph="circle" rows={1} />
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
