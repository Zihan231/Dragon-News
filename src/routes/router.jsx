import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../layouts/Home/Home';
import About from '../layouts/About/About.jsx'
import HomePage from '../pages/HomePage/HomePage.jsx'
import CategoryNews from '../pages/CategoryNews/CategoryNews.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: '/category/:id',
                loader: () => fetch('/news.json'),
                Component: CategoryNews
            }
        ]
    },
    {
        path: '/auth',
        element: <h1>auth</h1>
    },
    {
        path: '/about',
        Component: About
    },
    {
        path: '/*',
        element: <h2>Error</h2>

    }
])

export default router;