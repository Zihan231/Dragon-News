import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const FindUs = () => {
    return (
        <div>
            <div className='px-4 py-2'>
                <h1 className='font-semibold text-primary text-xl mb-4'>Find Us On</h1>
                <div className="join join-vertical grid grid-cols-1">
                    <button className="btn join-item justify-start bg-base-300 text-accent "> <FaFacebook size={20}/>Facebook</button>
                    <button className="btn join-item justify-start bg-base-300 text-accent"> <FaTwitter size={20}/>Twitter</button>
                    <button className="btn join-item justify-start bg-base-300 text-accent"> <FaInstagram size={20}/>Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;