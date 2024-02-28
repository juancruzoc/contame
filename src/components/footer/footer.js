import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    return (
        <footer id="main-footer" className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                <div className="text-white"><NavLink to="/" isActive={() => location.pathname === '/'}>Contame</NavLink></div>
                <ul className="flex space-x-4 text-white">
                    <li>
                        <NavLink to="/about" isActive={() => location.pathname === '/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us" isActive={() => location.pathname === '/contact-us'}>Contact Us</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;