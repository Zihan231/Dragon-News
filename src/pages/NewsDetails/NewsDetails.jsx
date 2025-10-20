import React from 'react';
import Header from '../../components/Header/Header';
import News from '../../components/News/News';
import RightAside from '../../components/RightAside/RightAside';

const NewsDetails = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-[80%] mx-auto'>
                <div className='grid grid-cols-[4fr_1fr] '>
                    <div>
                        <h1 className='font-semibold text-primary text-xl mb-2 mt-2 px-4'>Dragon News</h1>
                        <News></News>
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