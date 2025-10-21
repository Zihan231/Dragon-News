import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet, useNavigation } from 'react-router';
import LatestNews from '../../components/LatestNews/LatestNews';
import NavBar from '../../components/NavBar/NavBar';
import LeftAside from '../../components/LeftAside/LeftAside.jsx'
import RightAside from '../../components/RightAside/RightAside.jsx'
import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader.jsx';

const Home = () => {
    const { state } = useNavigation();
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
            <main className='grid grid-cols-[1fr_2fr_1fr] w-[90%] mx-auto items-start'>
                <aside className='sticky top-2'>
                    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                        <LeftAside></LeftAside>
                    </Suspense>
                </aside>
                <section className='main'>
                    {
                        state=="loading" ? <Loader></Loader> :<Outlet></Outlet>
                    }
                </section>
                <aside className='sticky top-2'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Home;