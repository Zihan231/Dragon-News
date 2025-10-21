import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { HashLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { isLoading, user } = useContext(AuthContext);
    if (isLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <div className="flex justify-center items-center h-64">
                    <HashLoader color="#050505" size={100} />
                </div>
            </div>
        );
    }
    if (user && user.email) {
        return children;
    }
    else {
        return <Navigate state={{ from: location.pathname }} to='/auth/login'></Navigate>
    }
};

export default PrivateRoute;