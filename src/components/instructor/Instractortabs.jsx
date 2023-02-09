import React from 'react';

import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Avatar } from 'rsuite';
import Class from '../../assets/css/creator.profile.module.css';
import Courses from './Courses';

export default function Instractor(props) {
    const { tabElement, setTabElement } = props;
    const {
        isLoading,
        // isError,
        instructor: instructorInfo,
        courses,
        // nextPage,
    } = useSelector((state) => state.instructor);
    return (
        <div>
            <div className={Class.nav}>
                <div className={Class.tab}>
                    <Button
                        className={
                            tabElement === 'workshops'
                                ? `${Class.btntabs} ${Class.active}`
                                : Class.btntabs
                        }
                        onClick={() => setTabElement('workshops')}
                    >
                        <p className={Class.p}>Workshops</p>
                    </Button>
                </div>
                <div className={Class.tab}>
                    <Button
                        className={
                            tabElement === 'about'
                                ? `${Class.btntabs} ${Class.active}`
                                : Class.btntabs
                        }
                        onClick={() => setTabElement('about')}
                    >
                        <p className={Class.p}>About</p>
                    </Button>
                </div>
            </div>
            <Container className="px-lg-0">
                {tabElement === 'about' && (
                    <div className={`${Class.instructor} rounded py-2`}>
                        <h4>About Instructor</h4>
                        <div className="d-flex align-items-center gap-2">
                            <div className="mt-1">
                                <Avatar
                                    circle
                                    src={instructorInfo.profile.path}
                                    alt={instructorInfo.user_name}
                                />
                            </div>
                            <div>
                                <p className="fw-bold h6">{`${instructorInfo.full_name} ${instructorInfo.user_name}`}</p>
                            </div>
                        </div>
                        <div className={`${Class.textJustify} border-bottom border-dark pb-2`}>
                            <p>{instructorInfo.about_me}</p>
                        </div>
                    </div>
                )}
                {tabElement === 'workshops' && (
                    <div>
                        <Courses courses={courses} isLoading={isLoading} />
                    </div>
                )}
            </Container>
        </div>
    );
}
