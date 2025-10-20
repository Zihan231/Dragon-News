import React, { useEffect, useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { HashLoader } from 'react-spinners';

const News = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    // console.log(news);
    const { id } = useParams();
    console.log(id);

    const [news, SetNews] = useState();
    console.log(news);
    useEffect(() => {
        if (data) {
            const singleNews = data.find(n => n.id == id);
            setTimeout(() => SetNews(singleNews), 300);
        }
        // console.log();
    }, [data, id]);

    if (!news) {
        return (
            <div className="flex justify-center items-center h-64">
                <HashLoader color="#050505" size={50} />
            </div>
        );
    }
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
                <button onClick={()=> navigate(-1)} className='bg-secondary px-4 flex gap-4 items-center justify-center text-white py-2 mt-4'>
                    <span>
                        <FaArrowLeftLong />
                    </span>
                    All news in this category
                </button>
            </div>
        </div>

    );
};

export default News;