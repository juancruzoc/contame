import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const GuestNavbar = () => {
    const location = useLocation();

    // Function to check if session cookie exists


    return (
        <header id="main-header" className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                <div className="text-white"><NavLink to="/" >Contame</NavLink></div>
                <ul className="flex space-x-4 text-white">
                    <li>
                        <NavLink to="/login">Log In</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </header>
    );
};

export default GuestNavbar;