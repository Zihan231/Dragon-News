import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4 mt-8'>
            <div>
                <img src={logo} alt="" />
            </div>
            <h3 className='text-accent'>Journalism Without Fear or Favour</h3>
            <p className='text-accent'>
                <span className='text-primary font-semibold'>
                {format(new Date(), "EEEE, ")}
                </span>
                {format(new Date(), "LLLL dd, yyyy")}
            </p>
        </div>
    );
};

export default Header;