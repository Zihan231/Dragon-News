import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

const News = ({ news }) => {
    const navigate = useNavigate();
    return (
        <div className='bg-base-200 p-6 border border-gray-200'>
            <div className='mb-4'>
                <img className='w-full rounded-md' src={news.thumbnail_url} />
            </div>
            <div>
                <h1 className='font-bold text-primary text-2xl mb-4'>
                    {news.title}
                </h1>
                <p className='text-accent text-justify'>
                    {
                        news.details
                    }
                </p>
            </div>
            <div>
                <button onClick={() => navigate(-1)} className='bg-secondary px-4 flex gap-4 items-center justify-center text-white py-2 mt-4'>
                    <span>
                        <FaArrowLeftLong />
                    </span>
                    Back to category
                </button>
            </div>
        </div>

    );
};

export default News;