import React, { useCallback, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiCube, BiGroup, BiUser } from 'react-icons/bi';
import { BsCameraVideo } from 'react-icons/bs';
import { CgSandClock } from 'react-icons/cg';
import { GrGroup } from 'react-icons/gr';
import { RiVipDiamondLine } from 'react-icons/ri';
import { TbFileCertificate, TbLanguage } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { Button, Divider } from 'rsuite';
import Class from '../../assets/css/course.info.module.css';
import Card from '../Cards/Basiccard';

export default function Infos({ slot, order, session, details }) {
    const navigate = useNavigate();
    const [expired, setExpired] = useState(false);
    const courseBuyHandler = () => navigate(`/workshop/payment/${details.uuid}`);

    const start = new Date(JSON.parse(session.schedule)[0]);

    const timer = useCallback(() => {
        const now = new Date().getTime();
        const scheduleTime = new Date(JSON.parse(session.schedule)[0]).getTime();
        const countDown = scheduleTime - now;
        if (countDown > 0) {
            setExpired(false);
        } else {
            setExpired(true);
        }
    }, [session.schedule]);
    useEffect(() => {
        const interval = setInterval(() => {
            timer();
        }, 0);
        return () => clearInterval(interval);
    }, [timer]);
    return (
        <Card title="Live Workshop" iconify={false}>
            <Container>
                <div>
                    <div className="mb-1">
                        <p>
                            <BiUser /> <span className="mx-3">{slot}</span>
                        </p>
                    </div>
                    <div className="mb-1">
                        <p>
                            <BiGroup /> <span className="mx-3">{order}</span>
                        </p>
                    </div>
                    <div className="mb-1">
                        <p>
                            <AiOutlineClockCircle />{' '}
                            <span className="mx-3">
                                {start.toLocaleString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                })}
                            </span>
                        </p>
                    </div>
                    <div className="mb-1">
                        <p>
                            <BsCameraVideo /> <span className="mx-3">Live Session</span>
                        </p>
                    </div>
                    <div className="mb-1">
                        <p>
                            <TbLanguage />{' '}
                            <span className="mx-3 text-capitalize">
                                Language: {details.language}
                            </span>
                        </p>
                    </div>
                    <div className="mb-1">
                        <p>
                            <RiVipDiamondLine />{' '}
                            <span className="mx-3 text-capitalize">Level: {details.level}</span>
                        </p>
                    </div>
                    <div className="mb-1">
                        <p>
                            <CgSandClock /> <span className="mx-3">30 Days Rec Avaiable</span>
                        </p>
                    </div>
                    <div className="mb-1">
                        <p>
                            <BiCube /> <span className="mx-3">Live QnA</span>
                        </p>
                    </div>
                    <div className="mb-1">
                        <p>
                            <GrGroup /> <span className="mx-3">Access to Expert Groups</span>
                        </p>
                    </div>
                    <div className="mb-1">
                        <p>
                            <TbFileCertificate />
                            <span className="mx-3">Certificate upon Completion</span>
                        </p>
                    </div>
                    <div className="mt-2 mb-1">
                        {expired ? (
                            <Button
                                appearance="default"
                                block
                                className={`${Class.buyBtn} fw-bold`}
                            >
                                {details.price} Tk
                                <Divider vertical />
                                Ended
                            </Button>
                        ) : (
                            <Button
                                appearance="default"
                                block
                                className={`${Class.buyBtn} fw-bold`}
                                onClick={courseBuyHandler}
                            >
                                {details.price} Tk
                                <Divider vertical />
                                Buy Now
                            </Button>
                        )}
                    </div>
                </div>
            </Container>
        </Card>
    );
}
