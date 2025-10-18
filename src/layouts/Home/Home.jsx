import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router';
import LatestNews from '../../components/LatestNews/LatestNews';
import NavBar from '../../components/NavBar/NavBar';
import LeftAside from '../../components/LeftAside/LeftAside.jsx'
import RightAside from '../../components/RightAside/RightAside.jsx'
import { Suspense } from 'react';

const Home = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='*:border grid grid-cols-[1fr_2fr_1fr] w-[90%] mx-auto'>
                <aside>
                    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                        <LeftAside></LeftAside>
                    </Suspense>
                </aside>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <aside>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Home;