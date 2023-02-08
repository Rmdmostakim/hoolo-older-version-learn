import React, { useEffect ,useCallback} from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Dropdown } from 'rsuite';
import course from '../../api/course';
import Class from '../../assets/css/learnpage.topbar.module.css';
import {setLearnFixed} from '../../features/DeviceSlice';
import WorkshopTabs from './WorkshopTabs';
export default function Topbar() {
    const { small, navHeight, bannerHeight,learFixed } = useSelector((state) => state.device);
    const { user } = useSelector((state) => state.auth);
    const { instructors } = useSelector((state) => state.course);
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const scrollHandler = useCallback(() => {
        const position = window.pageYOffset;
        const fixedPosition = bannerHeight;
        if (position > fixedPosition) {
            dispatch(setLearnFixed(true));
        } else {
            dispatch(setLearnFixed(false));
        }
    }, [bannerHeight]);
    useEffect(() => {
        if (!instructors) {
            dispatch(course.getAllInstructor());
        }
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [instructors, dispatch]);
    const style = {
        top: `${navHeight}px`,
        zIndex: '10',
        position:'fixed',
    };
    
    return (
            <div className={`${Class.container} p-2`}>
                {user && (
                    <div>
                        <Link
                            to="/user/workshop"
                            className={
                                small ? `${Class.myclassbtn} p-2 text-xs` : `${Class.myclassbtn} p-2`
                            }
                            style={
                                pathname === '/user/workshop'
                                    ? { backgroundColor: '#1c405d', color: '#ffffff' }
                                    : null
                            }
                        >
                            My Class
                        </Link>
                    </div>
                )}

                <div className={Class.filterBox}>
                    <div className="m-1">
                        <Link to="/">Instructors</Link>
                    </div>
                </div>
            </div>
        
    );
}
