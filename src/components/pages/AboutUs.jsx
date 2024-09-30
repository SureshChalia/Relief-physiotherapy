import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import therapistImage from '../../assets/about2.avif';


const AboutUs = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <section className="py-10 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col items-start gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="flex-col justify-start items-start gap-2 flex">
                                <h6 className="text-gray-400 text-base font-normal text-start">About Us</h6>
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-2 flex">
                                    <h2 className="text-indigo-900 text-4xl font-bold font-manrope text-start">
                                        We are the best for physiotherapy
                                    </h2>
                                    <p className="text-gray-500 text-base font-normal text-start">
                                    At Relief physiotherapy & rehabilitation clinic, we specialize in helping individuals overcome pain, improve mobility, and regain strength through personalized physiotherapy and advanced exercise techniques. With a team of experienced and certified physiotherapists, we are dedicated to delivering tailored treatment plans that address a wide range of physical conditions, including back pain, joint injuries, post-surgical rehabilitation, and chronic movement issues.                                    </p>
                                    <p className="text-gray-500 text-base font-normal text-start">Our approach combines hands-on manual therapy, state-of-the-art equipment, and patient education to promote long-term recovery and overall well-being. We believe in not just treating the symptoms but addressing the root causes of discomfort to help our patients lead healthier, more active lives.</p>
                                    <p className="text-gray-500 text-base font-normal text-start">Whether you're an athlete recovering from injury, someone dealing with chronic pain, or simply seeking to improve your physical health, we are here to guide and support you every step of the way. At Relief physiotherapy & rehabilitation clinic, your recovery is our priority. Let us help you move better, feel better, and live better.</p>
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center items-start gap-6 flex cursor-pointer">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-indigo-900 text-2xl font-bold font-manrope leading-9">5+ Years</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            Expert therapist
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-indigo-900 text-2xl font-bold font-manrope leading-9">Advanced Techniques</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            Used to enhance treatment
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-indigo-900 text-2xl font-bold font-manrope leading-9">Personalized Care</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            Tailored support for individuals
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-indigo-900 text-2xl font-bold font-manrope leading-9">99% Happy Clients</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            Mirrors our Focus on Client Satisfaction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={"/contact-us"} className="w-fit group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                            <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                                Book treatment
                            </span>
                            <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                    <div className="w-full lg:justify-start justify-center items-start flex">
                        <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                            <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover" src={therapistImage} alt="About Us" />
                        </div>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col mt-10">
                    <div>
                        <h2 className="text-indigo-900 text-4xl font-bold font-manrope text-start mb-2">Mission</h2>
                        <p className="text-gray-400">Our mission is to empower individuals to live pain-free, healthy, and active lives by providing personalized physiotherapy treatments, advanced exercise techniques, and comprehensive rehabilitation programs. We are committed to delivering exceptional care that promotes long-term wellness, mobility, and recovery, ensuring that every patient receives the attention and support they need to restore optimal function and quality of life.</p>
                    </div>
                    <div>
                        <h2 className="text-indigo-900 text-4xl font-bold font-manrope text-start mb-2">Vision</h2>
                        <p className="text-gray-400">Our vision is to be a leading physiotherapy clinic recognized for transforming lives through innovative treatment methods, compassionate care, and a holistic approach to physical health. We aim to set the standard for excellence in physiotherapy by fostering a community of wellness, encouraging preventative care, and continuously advancing our knowledge and expertise to help individuals achieve their full physical potential.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
