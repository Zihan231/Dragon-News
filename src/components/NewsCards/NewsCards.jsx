import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsCards = ({ news }) => {
    return (
        <div className='border border-gray-200 px-4 py-4 bg-base-200'>
            {/* Author info */}
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <img className='w-[40px] rounded-full' src={news.author.img} alt={news.author.name} />
                    <div>
                        <h3 className='text-primary font-semibold'>{news.author.name}</h3>
                        <p className='text-accent text-sm'>
                            {new Date(news.author.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <CiBookmark size={24} />
                    <FaShareAlt size={22} />
                </div>
            </div>

            {/* Title and Thumbnail */}
            <div className='mt-2'>
                <div className='flex items-center gap-2'>
                    <h1 className='font-bold text-primary text-xl'>{news.title}</h1>
                    {news.others.is_trending && (
                        <span className='text-xs font-semibold text-white bg-orange-500 px-2 py-1 rounded'>
                            Trending
                        </span>
                    )}
                </div>
                <div className='flex justify-center items-center'>
                    <img className='rounded-xl mt-2' src={news.thumbnail_url} alt={news.title} />
                </div>
                <p className='text-accent mt-4 text-justify'>{news.details}</p>

                {/* Tags */}
                {news.tags && (
                    <div className='flex flex-wrap gap-2 mt-2'>
                        {news.tags.map(tag => (
                            <span key={tag} className='text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded'>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Rating and Views */}
            <div className='flex justify-between border-t border-gray-200 py-5 px-4 mt-4'>
                <div className='flex items-center gap-4'>
                    {/* Stars */}
                    <div className='flex gap-1'>
                        {Array(news.rating.number).fill(0).map((_, index) => (
                            <FaStar key={index} color='#FF8C47' />
                        ))}
                    </div>
                    <div>
                        <p className='text-accent font-medium'>{news.rating.number}</p>
                    </div>
                </div>

                {/* Views */}
                <div className='flex items-center gap-2'>
                    <FaEye />
                    <p className='text-accent font-medium'>{news.total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCards;
