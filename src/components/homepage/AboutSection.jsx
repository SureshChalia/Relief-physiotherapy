import React from 'react';
import therapistImage from '../../assets/about2.avif';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <section className="py-10 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-center items-start gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="flex-col items-start gap-1 flex">
                                <h6 className="text-gray-400 text-base font-normal leading-relaxed text-start">/ Who we are</h6>
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-2 flex">
                                    <h2 className="text-indigo-900 text-xl sm:text-4xl font-bold font-manrope text-start">
                                    We are the Experts in Exercise Physiology
                                    </h2>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed text-start">
                                        We understand that physical health and fitness are vital to leading a healthy life. Our team of certified Exercise Physiologists specializes in designing tailored exercise programs that promote recovery, improve mobility, and enhance overall well-being. Whether you're managing chronic conditions, recovering from injury, or looking to optimize your physical performance, we provide expert guidance to help you achieve your goals through safe and effective exercise interventions.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center items-start gap-6 flex cursor-pointer">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-indigo-900 text-xl sm:text-2xl font-bold font-manrope leading-9">5+ Years</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            Expert Exercise Physiologist
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-indigo-900 text-xl sm:text-2xl font-bold font-manrope leading-9">Advanced Techniques</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            Used to enhance treatment
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-indigo-900 text-xl sm:text-2xl font-bold font-manrope leading-9">Personalized Care</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            Tailored support for individuals
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-indigo-900 text-xl sm:text-2xl font-bold font-manrope leading-9">99% Happy Clients</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            Mirrors our Focus on Client Satisfaction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className=''>
                                <Link
                                    to={"/contact-us"}
                                    className="animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-blue-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
                                >
                                    <span className="ml-2">Book your appoitment</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:justify-start justify-center items-start flex">
                        <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                            <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover" src={therapistImage} alt="About Us" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
