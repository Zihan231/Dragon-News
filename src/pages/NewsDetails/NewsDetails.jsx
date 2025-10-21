import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import News from '../../components/News/News';
import RightAside from '../../components/RightAside/RightAside';
import { useLoaderData, useParams } from 'react-router';
import { HashLoader } from 'react-spinners';
import NavBar from '../../components/NavBar/NavBar';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    // console.log(id);

    const [news, SetNews] = useState();
    // console.log(news);
    useEffect(() => {
        if (data) {
            const singleNews = data.find(n => n.id == id);
            setTimeout(() => SetNews(singleNews), 300);
        }
        // console.log();
    }, [data, id]);

    if (!news) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <div className="flex justify-center items-center h-64">
                    <HashLoader color="#050505" size={100} />
                </div>
            </div>
        );
    }
    return (
        <div>
            <header>
                <Header></Header>
                <NavBar></NavBar>
            </header>
            <main className='w-[80%] mx-auto'>
                <div className='grid grid-cols-[4fr_1fr] '>
                    <div>
                        <h1 className='font-semibold text-primary text-xl mb-2 mt-2 px-4'>Dragon News</h1>
                        <News news={news}></News>
                    </div>
                    <div>
                        <RightAside></RightAside>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;