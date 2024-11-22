import React from 'react';
import swmming from '../assets/swimming.png'
import play from '../assets/playground.png'
import classt from '../assets/class.png'

const QZone = () => {
    return (
        <div>
            <h1 className='font-semibold my-2'>Q-Zone</h1>
            <div className='bg-base-200 flex flex-col p-2 items-center rounded-lg justify-center'>
                <img src={swmming} alt="" />
                <img src={play} alt="" />
                <img src={classt} alt="" />

            </div>
        </div>
    );
};

export default QZone;