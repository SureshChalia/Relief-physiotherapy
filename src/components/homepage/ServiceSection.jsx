import React from "react";
import { Link } from "react-router-dom";
import curvical from "../../assets/curvical.jpg"
import back from "../../assets/back2.jpg"
import shoulder from "../../assets/shoulder.jpg"
import elbow from "../../assets/elbow.jpg"
import surgical from "../../assets/surgical.jpeg"
import facial from "../../assets/facial.jpg"
import paralysis from "../../assets/paralysis.jpg"
import hand from "../../assets/hand.jpg"
import belly from "../../assets/belly.jpg"

const data = [
  {
    title: "Lumbago Rehabilitation",
    detail: "Effective treatment for back pain focusing on strengthening and flexibility to alleviate discomfort and enhance mobility.",
    backgroundImage: back,
  },
  {
    title: "Cervical Pain Management",
    detail: "Specialized techniques to address neck pain, aimed at relieving tension and restoring normal range of motion",
    backgroundImage: curvical,
  },
  {
    title: "Shoulder Stability Therapy",
    detail: "Targeted exercises and modalities designed to alleviate shoulder pain and improve joint function and stability.",
    backgroundImage: shoulder,
  },
  {
    title: "Elbow Rehabilitation Program",
    detail: "Comprehensive treatment for elbow pain that includes strength training and mobility exercises to promote healing.",
    backgroundImage: elbow,
  },
  {
    title: "Post-Surgical Rehabilitation",
    detail: "Tailored therapy following surgery to facilitate recovery, restore function, and minimize complications during the healing process.",
    backgroundImage: surgical,
  },
  {
    title: "Facial Pain Relief Protocol",
    detail: "Comprehensive approaches to manage facial pain, integrating massage, exercises, and modalities for pain reduction.",
    backgroundImage: facial,
  },
  {
    title: "Neurological Recovery Therapy",
    detail: "Specialized treatment for paralysis, focusing on regaining movement and functionality through targeted exercises and support.",
    backgroundImage: paralysis,
  },
  {
    title: "Manual Therapy for Hand Pain",
    detail: "Hands-on techniques aimed at relieving pain and improving function in the hands, promoting recovery from injuries.",
    backgroundImage: hand,
  },
  {
    title: "Abdominal Rehabilitation Program",
    detail: "Treatment strategies focused on alleviating belly pain and strengthening core muscles to enhance overall stability and comfort.",
    backgroundImage: belly,
  },
];

const ServiceSection = () => {
  return (
    <div className="container max-w-7xl w-11/12 mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4">
        <div className="flex-1 mb-4 lg:mb-0">
          <p className="text-gray-400 text-base font-normal leading-relaxed">/ Our Services</p>
          <h2 className="text-indigo-900 text-4xl font-bold font-manrope leading-normal text-start">
            What we offer
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            We offer top-quality physiotherapy services tailored to your needs.
          </p>
          <p className="text-base text-body-color dark:text-dark-6">
            Our expert therapists use advanced techniques to treat pain, improve mobility.
          </p>
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
      <div className=" px-2 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div
              className="h-48"
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
            ></div>
            <div className="p-4">
              <h2 className="font-bold mb-2 text-2xl text-blue-900">{item.title}</h2>
              <p className="text-gray-400">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
