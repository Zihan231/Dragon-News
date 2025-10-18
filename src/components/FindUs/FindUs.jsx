import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <div className='px-4 py-4'>
                <h1 className='font-semibold text-primary text-xl mb-4'>Find Us On</h1>
                <div className="join join-vertical w-full">
                    <button className="btn join-item justify-start bg-blue-600 text-white hover:bg-blue-700 transition flex items-center gap-2 px-4 py-2">
                        <FaFacebook size={20} /> Facebook
                    </button>
                    <button className="btn join-item justify-start bg-sky-400 text-white hover:bg-sky-500 transition flex items-center gap-2 px-4 py-2">
                        <FaTwitter size={20} /> Twitter
                    </button>
                    <button className="btn join-item justify-start bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-white hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 transition flex items-center gap-2 px-4 py-2">
                        <FaInstagram size={20} /> Instagram
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;
