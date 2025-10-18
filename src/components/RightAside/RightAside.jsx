import React from 'react';
import SocialLogin from '../SocialLogIn/SocialLogin';
import FindUs from '../FindUs/FindUs';
import QZone from '../QZone/QZone';

const RightAside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;