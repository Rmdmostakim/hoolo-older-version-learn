import React, { useEffect, useState } from 'react';
import { AiOutlineCompass, AiOutlineHome, AiOutlineShopping } from 'react-icons/ai';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { Nav } from 'rsuite';
import Class from '../../assets/css/navmenu.module.css';

export default function Navmenu() {
    const location = useLocation();
    const { pathname } = location;
    const [active, setActive] = useState(pathname.replace(/\//g, ''));
    useEffect(() => {
        setActive(pathname.replace(/\//g, ''));
    }, [pathname]);
    return (
        <div className={Class.link}>
            <Nav justified appearance="subtle" activeKey={active} onSelect={setActive}>
                <Nav.Item
                    eventKey=""
                    icon={<AiOutlineHome />}
                    className="text-center"
                    style={{ paddingInline: '0px', paddingBottom: '10px' }}
                    as={Link}
                    to="/"
                >
                    Feed
                </Nav.Item>
                <Nav.Item
                    eventKey="discover"
                    icon={<AiOutlineCompass />}
                    className="text-center"
                    style={{ paddingInline: '0px', paddingBottom: '10px' }}
                    as={Link}
                    to="/discover"
                >
                    Discover
                </Nav.Item>
                <Nav.Item
                    eventKey="shop"
                    icon={<AiOutlineShopping />}
                    className="text-center"
                    style={{ paddingInline: '0px', paddingBottom: '10px' }}
                    as={Link}
                    to="/shop"
                >
                    Shop
                </Nav.Item>
                <Nav.Item
                    eventKey="learn"
                    icon={<HiOutlineBookOpen />}
                    className="text-center"
                    style={{ paddingInline: '0px', paddingBottom: '10px' }}
                    as={Link}
                    to="/learn"
                >
                    Learn
                </Nav.Item>
            </Nav>
        </div>
    );
}
