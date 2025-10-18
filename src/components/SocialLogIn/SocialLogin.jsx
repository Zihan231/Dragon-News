import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <div className='px-4 py-2'>
                <h1 className='font-semibold text-primary text-xl mb-4'>Login With</h1>
                <div className='grid grid-cols-1 gap-2'>
                    <button className="btn btn-outline btn-secondary">
                        <FcGoogle size={20}/>
                        Login With Google</button>
                    <button className="btn btn-outline btn-primary"><FaGithub size={20}/>Login With Github</button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;