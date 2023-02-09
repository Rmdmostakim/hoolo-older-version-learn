import React from 'react';
import { Button } from 'rsuite';
import Class from '../../assets/css/banner.creator.module.css';

export default function Instractorbanner(props) {
    const { bannerimg, dp, name, follower } = props;
    return (
        <div className={Class.banner}>
            <img className={Class.imagebanner} src={bannerimg} alt="banner" />
            <div className={Class.shadow} />
            <div className={Class.info}>
                <div className={Class.center}>
                    <img className={`${Class.dp} p-1 rounded-circle border`} src={dp} alt="img" />
                </div>
                <div className={`${Class.center} pt-1`}>
                    <h2 className={`${Class.name} text-capitalize`}>{name}</h2>
                </div>

                <div className={`${Class.followBlock} py-2`}>
                    <Button
                        className={`${Class.followbtn} px-4 border border-2 text-white`}
                        appearance="ghost"
                    >
                        Follow
                    </Button>
                    <p className={Class.following}>Following {follower}</p>
                </div>
            </div>
        </div>
    );
}
