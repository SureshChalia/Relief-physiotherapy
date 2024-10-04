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
                                    <h2 className="text-indigo-900 text-xl sm:text-4xl font-bold font-manrope text-start">
                                    We are the experts in exercise physiology.
                                    </h2>
                                    <p className="text-gray-500 text-base font-normal text-start">
                                        At Relief Exercise Physiology & Rehabilitation Clinic, we specialize in helping individuals overcome pain, improve mobility, and regain strength through personalized exercise programs and advanced rehabilitation techniques. With a team of experienced and certified exercise physiologists, we are dedicated to creating tailored exercise plans that address a wide range of physical conditions, including chronic pain, joint injuries, post-surgical recovery, and long-term health management.
                                    </p>
                                    <p className="text-gray-500 text-base font-normal text-start">Our approach combines evidence-based exercise prescriptions, state-of-the-art equipment, and patient education to promote sustainable recovery and long-term well-being. We don’t just focus on managing symptoms—we aim to identify and address the root causes of physical limitations to help our clients achieve optimal health and active lifestyles.</p>
                                    <p className="text-gray-500 text-base font-normal text-start">Whether you're an athlete recovering from an injury, managing a chronic condition, or looking to enhance your physical health, we are here to guide and support you. At Relief Exercise Physiology & Rehabilitation Clinic, your health and recovery are our top priority. Let us help you move better, feel stronger, and live your best life.</p>
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center items-start gap-6 flex cursor-pointer">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 className="text-indigo-900 text-xl sm:text-2xl font-bold font-manrope leading-9">5+ Years</h4>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                                            Expert Physiologist
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
                <div className="flex sm:flex-row flex-col mt-10 gap-5">
                    <div>
                        <h2 className="text-indigo-900 text-xl sm:text-4xl font-bold font-manrope text-start mb-2">Mission</h2>
                        <p className="text-gray-500">Our mission is to empower individuals to live pain-free, healthy, and active lives by providing personalized exercise physiology programs, advanced rehabilitation techniques, and comprehensive health management plans. We are committed to delivering exceptional care that promotes long-term wellness, mobility, and recovery. Our goal is to ensure that every client receives the attention and support they need to restore optimal physical function and improve their overall quality of life.</p>
                    </div>
                    <div>
                        <h2 className="text-indigo-900 text-xl sm:text-4xl font-bold font-manrope text-start mb-2">Vision</h2>
                        <p className="text-gray-500">Our vision is to be a leading exercise physiology clinic recognized for transforming lives through innovative exercise programs, compassionate care, and a holistic approach to physical health. We aim to set the standard for excellence in exercise physiology by fostering a community of wellness, promoting preventative care, and continuously advancing our knowledge and expertise to help individuals reach their full physical potential.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
