import React from 'react';
import SocialLogin from '../SocialLogin';
import FindOus from '../FindOus';
import QZone from '../QZone';

const RightNav = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <FindOus></FindOus>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;