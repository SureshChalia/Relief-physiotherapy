import React from 'react'
import { Link } from 'react-router-dom';
import { IoPeopleSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { PiUsersThreeFill } from "react-icons/pi";



const featuresData = [
    {
        icon: <IoPeopleSharp className='text-5xl' />,
        title: 'Experienced Team',
        details: 'Our team consists of highly trained and experienced professionals dedicated to your recovery.',
    },
    {
        icon: <FaTools className='text-5xl' />,
        title: 'Advanced Technology',
        details: 'We utilize the latest technology and techniques to ensure effective treatments.',
    },
    {
        icon: <MdOutlinePersonalInjury className='text-5xl' />,
        title: 'Personalized Treatment',
        details: 'Every treatment plan is tailored to meet your individual needs and goals.',
    },
    {
        icon: <FaHandHoldingHeart className='text-5xl' />,
        title: 'Convenient and Accessible',
        details: 'Our services are designed to be easily accessible for your convenience.',
    },
    {
        icon: <GiRibbonMedal className='text-5xl' />,
        title: 'Expertise and Experience',
        details: 'We bring years of expertise in physiotherapy to help you recover quickly.',
    },
    {
        icon: <PiUsersThreeFill className='text-5xl' />,
        title: 'Community Involvement',
        details: 'We actively participate in community programs to promote health and wellness.',
    },
];

const FeaturesCard = ({ icon, title, details }) => {
    return (
        <div className="bg-blue-900 shadow-lg rounded-lg p-6 mb-6 transition-transform transform hover:scale-105 flex flex-col items-center">
            <div className='rounded-md p-2 text-white'>{icon}</div>
            <h4 className="text-xl font-semibold text-slate-100 mb-2 text-center">{title}</h4>
        </div>
    );
};



const RehablisationSection = () => {
    return (
        <div className='max-w-7xl w-11/12 mx-auto flex flex-col gap-5'>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4">
                <div className="flex-1 mb-4 lg:mb-0">
                    <p className="text-gray-400 text-base font-normal leading-relaxed">/ Rehabilitation</p>
                    <h2 className="text-indigo-900 text-4xl font-bold font-manrope leading-normal text-start">
                        Excellence In Care And Rehabilitation
                    </h2>
                </div>
                <div className="">
                    <Link to={"/contact-us"} className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out flex items-center">
                        <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                            Book treatment
                        </span>
                        <svg className="ml-1 group-hover:translate-x-0.5 transition-all duration-700 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div>
                <div className="container mx-auto px-2 sm:px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {featuresData.map((feature, index) => (
                            <FeaturesCard key={index} icon={feature.icon} title={feature.title} details={feature.details} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RehablisationSection