import React from 'react';
import { Button } from 'rsuite';
import Class from '../../assets/css/instructorpage.banner.module.css';

export default function Banner(props) {
    const { bannerimg, dp, name, follower } = props;
    return (
        <div>
            <div className={Class.container}>
                <img className={Class.banner} src={bannerimg} alt="banner" />
                <div className={Class.shadow} />
                <div className={Class.info}>
                    <div className={Class.center}>
                        <img className={`${Class.dp} imageCircle`} src={dp} alt="img" />
                    </div>
                    <div className={Class.center}>
                        <b className={Class.name}>{name}</b>
                    </div>

                    <div className={Class.followBlock}>
                        <Button className={Class.followbtn} appearance="ghost">
                            Follow
                        </Button>
                        <p className={Class.following}>Following {follower}</p>
                    </div>
                </div>
            </div>
            <div className={Class.block}>Workshop</div>
        </div>
    );
}
