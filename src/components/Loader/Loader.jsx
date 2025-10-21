import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <div className="flex justify-center items-center h-4">
                <HashLoader color="#050505" size={100} />
            </div>
            <h1>Please Wait...</h1>
        </div>
    );
};

export default Loader;