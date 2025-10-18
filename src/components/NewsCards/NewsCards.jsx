import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsCards = ({news}) => {
    return (
        <div className='border border-gray-200 px-4 py-4 bg-base-200'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <img className='w-[40px] rounded-full' src={news.author.img} alt="" />
                    <div>
                        <h3 className='text-primary font-semibold '>{ news.author.name }</h3>
                        <p className='text-accent text-sm'>{ news.author.published_date }</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <CiBookmark size={24} />
                    <FaShareAlt size={22} />
                </div>
            </div>
            <div className='mt-2'>
                <h1 className='font-bold text-primary text-xl'>
                    {news.title}
                </h1>
                <div className='flex justify-center items-center'>
                    <img className='rounded-xl mt-2' src={news.thumbnail_url} alt={news.thumbnail_url} />
                </div>
                <p className='text-accent mt-4 text-justify'>
                    {news.details}
                </p>
            </div>
            <div className='flex justify-between border-t border-gray-200 py-5 px-4 mt-4'>
                <div className='flex items-center gap-4'>
                    <div className='flex gap-1' >
                        <FaStar color='#FF8C47' />
                        <FaStar color='#FF8C47' />
                        <FaStar color='#FF8C47' />
                        <FaStar color='#FF8C47' />
                        <FaStar color='#FF8C47' />
                    </div>
                    <div>
                        <p className='text-accent font-medium'>
                            4.9
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <FaEye />
                    <p className='text-accent font-medium'>499</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCards;