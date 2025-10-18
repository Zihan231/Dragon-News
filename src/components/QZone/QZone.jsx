import React from 'react';
import swImg from '../../assets/swimming.png';
import clsImg from '../../assets/class.png';
import plyImg from '../../assets/playground.png';

const QZone = () => {
    return (
        <div className='px-4 py-4 bg-base-200'>
            <h1 className='font-semibold text-primary text-xl mb-4'>Q-Zone</h1>
            <div className='flex flex-col justify-center items-center'>
                <img className='' src={swImg} alt={ swImg } />
                <img src={clsImg} alt={ clsImg } />
                <img src={plyImg} alt={ plyImg } />
            </div>
        </div>
    );
};

export default QZone;