import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-blue-900 sticky w-full z-20 top-0 start-0 border-b shadow-lg">
                <div className="max-w-7xl w-11/12 flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8 text-2xl" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Relief physio</span>
                    </Link>
                    <button
                        onClick={toggleNavbar}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden border"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Link
                                    to={"/"}
                                    onClick={toggleNavbar}
                                    className="block py-2 px-3 rounded hover:bg-blue-300 md:hover:bg-transparent md:border-0  md:p-0 text-white"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/about-us"}
                                    onClick={toggleNavbar}
                                    className="block py-2 px-3 rounded hover:bg-blue-300 md:hover:bg-transparent md:border-0  md:p-0 text-white"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/"}
                                    onClick={toggleNavbar}
                                    className="block py-2 px-3 rounded hover:bg-blue-300 md:hover:bg-transparent md:border-0  md:p-0 text-white"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/contact-us"}
                                    onClick={toggleNavbar}
                                    className="block py-2 px-3 rounded hover:bg-blue-300 md:hover:bg-transparent md:border-0  md:p-0 text-white "
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className='flex gap-1 items-center sm:pl-0 pl-3'>
                                <Link to={"https://www.facebook.com/people/Relief-physiotherapy-rehabilitation-clinic/100064117357892/?mibextid=qi2Omg&rdid=GOpKoTmqDBQV99Vx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F7XokSjtu8nb31dah%2F%3Fmibextid%3Dqi2Omg"} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-800"><FaFacebook size={24} /></Link>
                                <Link to={"https://www.instagram.com/relief844physiotherpy/?igsh=ZWJ1eHpiZmlycnlj"} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-800"><FaInstagram size={24} /></Link>
                                <Link to={"https://g.co/kgs/n2VB7xF"} className="text-white hover:text-red-500" target="_blank" rel="noopener noreferrer"><FaGoogle size={24} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
