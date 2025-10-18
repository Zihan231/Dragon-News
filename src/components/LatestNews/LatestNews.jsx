import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 px-4 mt-8 py-4 w-[90%] mx-auto bg-base-200'>
            <p className='bg-secondary px-2 py-1 text-base-300'>
                Latest
            </p>
            <Marquee>
                <div className='flex gap-6 justify-around mx-4'>
                    <p className='font-semibold text-primary'>
                    Match Highlights: Germany vs Spain — as it happened.
                </p>
                <p className='font-semibold text-primary'>
                    Match Highlights: Germany vs Spain as
                </p>
                <p className='font-semibold text-primary'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, ut?
                </p>
                </div>
            </Marquee>

        </div>
    );
};

export default LatestNews;