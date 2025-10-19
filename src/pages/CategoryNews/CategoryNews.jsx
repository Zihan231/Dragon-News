import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCards from '../../components/NewsCards/NewsCards';


const CategoryNews = () => {
    const [newsByCategory, SetNewsByCategory] = useState([]);
    const { id } = useParams();
    const allNews = useLoaderData();
    useEffect(() => {
        if (id == "0") {
            SetNewsByCategory(allNews);
            return;
        }
        else if (id == "1") {
            const filteredNews = allNews.filter(news => news.others.is_today_pick == true);
            SetNewsByCategory(filteredNews);
            // console.log(filteredNews);

        }
        else {
            const filteredNews = allNews.filter(news => news.category_id == id);
            SetNewsByCategory(filteredNews);
            // console.log(filteredNews);
        }

    }, [id, allNews, SetNewsByCategory]);
    // console.log(allNews);   
    return (
        <div>
            {/* Categories {newsByCategory.length} */}
            <div className='grid grid-cols-1 px-4 gap-4'>
                <h1 className='font-semibold text-primary text-xl mb-2 px-4'>Total News Found (<span className='text-secondary'>{newsByCategory.length}</span>)</h1>
                {
                    newsByCategory.length > 0 ? newsByCategory.map(news => <NewsCards key={news.id} news={news}></NewsCards>) : (
                        <div className='flex flex-col items-center justify-center py-20 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-gray-400 mb-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6m2 0h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h2" />
                            </svg>
                            <h1 className='text-gray-500 text-xl font-semibold'>No News Found</h1>
                            <p className='text-gray-400 text-sm mt-2'>Try selecting another category or check back later.</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryNews;