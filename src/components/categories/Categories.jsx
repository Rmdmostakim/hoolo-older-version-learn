import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Nav } from 'rsuite';
import Class from '../../assets/css/category.module.css';
import Card from '../Cards/Basiccard';
import Category from '../placeholders/Category';

function Categories(props) {
    const { title, iconify, data, link, nav } = props;
    const { isLoading } = useSelector((state) => state.category);
    const [showmore, setShowmore] = useState(false);
    const [active, setActive] = useState('');
    const handleShowmore = () => setShowmore(!showmore);
    useEffect(() => {
        if (nav) {
            setActive(data && data[0].name);
        }
    }, [setActive, nav, data]);
    const listView = () => {
        if (showmore) {
            return data.map((gcategory) => (
                <li key={gcategory.uuid}>
                    <Link to={`${link}/${gcategory.uuid}`} className="text-capitalize">
                        {gcategory.icon && (
                            <img src={gcategory.icon} className={Class.icon} alt={gcategory.name} />
                        )}
                        {gcategory.name}
                    </Link>
                </li>
            ));
        }
        return data && data.map((gcategory, index) => {
            if (index < 4) {
                return (
                    <li key={gcategory.uuid}>
                        <Link to={`${link}/${gcategory.uuid}`} className="text-capitalize">
                            {gcategory.icon && (
                                <img
                                    src={gcategory.icon}
                                    className={Class.icon}
                                    alt={gcategory.name}
                                />
                            )}
                            {gcategory.name}
                        </Link>
                    </li>
                );
            }
            return null;
        });
    };

    const navView = () => {
        if (showmore) {
            return data.map((category) => (
                <Nav.Item
                    eventKey={category.name}
                    key={category.uuid}
                    as={Link}
                    to={`${link}/${category.uuid}`}
                    className="text-capitalize"
                >
                    {category.name}
                </Nav.Item>
            ));
        }
        return data && data.map((category, index) => {
            if (index < 5) {
                return (
                    <Nav.Item
                        eventKey={category.name}
                        key={category.uuid}
                        as={Link}
                        to={`${link}/${category.uuid}`}
                        className="text-capitalize"
                    >
                        {category.name}
                    </Nav.Item>
                );
            }
            return null;
        });
    };

    if (nav) {
        return (
            <div className={Class.container}>
                <Card title={title} iconify={iconify}>
                    <Nav
                        appearance="subtle"
                        vertical
                        reversed
                        activeKey={active}
                        onSelect={setActive}
                        style={{ width: '100%', textAlign: 'left' }}
                    >
                        {navView()}
                    </Nav>
                    <div className="text-center">
                        <Button appearance="subtle" onClick={handleShowmore}>
                            {showmore ? 'Show Less' : 'Show More'}
                        </Button>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={Class.container}>
            <Card title={title} iconify={iconify}>
                {isLoading ? (
                    <Category graph="circle" rows={1} />
                ) : (
                    <>
                        <ul>{listView()}</ul>
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

export default Categories;
