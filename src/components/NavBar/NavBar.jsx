import React, { useContext } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router';
import profile from '../../assets/user.png';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const NavBar = () => {
    const navigate = useNavigate();
    const { user, handleSignOut } = useContext(AuthContext);
    const handleLogOut = () => {

        handleSignOut().then(() => {
            navigate('/');

        }).catch((error) => {
        });
    }
    const NavLinks = <>
        <div className='flex gap-4 text-accent text-lg'>
            <h1>{user && user.email}</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
        </div>
    </>
    return (
        <div className="navbar bg-base-100 mt-4 px-18">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {NavLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        NavLinks
                    }
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <img className='w-12' src={(user && user.email) ? (user.photoURL) : (profile)} alt="" />
                {
                    user ? (
                        <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
                    ) :
                        (
                            <Link to='/auth/login' className="btn btn-primary">Login</Link>
                        )
                }
            </div>
        </div>
    );
};

export default NavBar;