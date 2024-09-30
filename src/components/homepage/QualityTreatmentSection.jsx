import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/about2.avif"

const QualityTreatmentSection = () => {
    return (
        <div className='bg-gray-50'>
            <div className="flex flex-col lg:flex-row items-center justify-between py-10 lg:py-20 px-2 max-w-7xl w-11/12 mx-auto">
                {/* Text Column */}
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
                    <p className="text-gray-400 text-lg mb-4">/ Quality Treatment</p>
                    <h2 className="text-indigo-900 text-4xl lg:text-5xl font-bold leading-snug mb-6 text-start">
                        We Proudly Give <br /> Quality Treatment
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6 text-start">
                        We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt and effective care to help you manage.
                    </p>
                    <ul className="space-y-4 mb-6">
                        <li className="flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                            We Understand That Injuries
                        </li>
                        <li className="flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Can Happen Unexpectedly, Our Emergency
                        </li>
                        <li className="flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                            We Understand That Injuries
                        </li>
                    </ul>
                    <Link to={"/contact-us"} className="w-fit group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out flex items-center">
                        <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                            Make an Appoitment
                        </span>
                        <svg className="ml-1 group-hover:translate-x-0.5 transition-all duration-700 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                {/* Image Column */}
                <div className="lg:w-1/2 w-full">
                    <img
                        src={img}
                        alt="Quality Treatment"
                        className="w-full rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default QualityTreatmentSection;
