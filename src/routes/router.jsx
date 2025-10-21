import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../layouts/Home/Home';
import About from '../layouts/About/About.jsx'
import HomePage from '../pages/HomePage/HomePage.jsx'
import CategoryNews from '../pages/CategoryNews/CategoryNews.jsx';
import Login from '../components/Login/Login.jsx';
import AuthLayout from '../layouts/Auth/AuthLayout.jsx';
import Register from '../components/Register/Register.jsx';
import NewsDetails from '../pages/NewsDetails/NewsDetails.jsx';
import PrivateRoute from '../context/private/PrivateRoute.jsx'
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
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    },
    {
        path: '/about',
        Component: About
    },
    {
        path: '/news-details/:id',
        loader: () => fetch('/news.json'),
        element: <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>
        
    },
    {
        path: '/*',
        element: <h2>Error</h2>

    }
])

export default router;