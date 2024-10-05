import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/fitness.jpg"
import shoulder from "../../assets/shoulder.jpg"
import surgical from "../../assets/sports.jpg"
import paralysis from "../../assets/paralysis.jpg"
import chronic from "../../assets/chronic.jpeg"
import exercise from "../../assets/b2.jpg"
import health from "../../assets/b1.jpg"


const data = [
  {
    title: "Fitness Assessments",
    detail: "Evaluating cardiovascular health, muscle strength, flexibility, and body composition.",
    backgroundImage: back,
  },
  {
    title: "Customized Exercise Plans",
    detail: "Creating personalized workout programs based on fitness goals and health status.",
    backgroundImage: exercise,
  },
  {
    title: "Injury Rehabilitation",
    detail: "Designing exercises to aid in recovery from injuries or surgery.",
    backgroundImage: shoulder,
  },
  {
    title: "Chronic Disease Management",
    detail: "Exercise programs for conditions like diabetes, heart disease, and obesity.",
    backgroundImage: chronic,
  },
  {
    title: "Sports Performance Enhancement",
    detail: "Training to improve athletic performance and reduce injury risk.",
    backgroundImage: surgical,
  },
  {
    title: "Health Education:",
    detail: "Guidance on exercise techniques, nutrition, and lifestyle changes.",
    backgroundImage: health,
  },
  {
    title: "Monitoring And Progress Tracking",
    detail: "Regular check-ins to assess progress and adjust exercise plans.",
    backgroundImage: paralysis,
  }
];

const ServiceSection = () => {
  return (
    <div className="container max-w-7xl w-11/12 mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4 gap-5">
        <div className="flex-1 mb-4 lg:mb-0">
          <p className="text-gray-400 text-base font-normal leading-relaxed">/ Our Services</p>
          <h2 className="text-indigo-900 text-xl sm:text-4xl font-bold font-manrope leading-normal text-start">
            What we offer
          </h2>
          <p className="text-base text-body-color text-gray-500 mt-2">
            Our certified exercise physiologists use evidence-based techniques to enhance physical function, manage chronic conditions, and promote overall health.
            Whether you're recovering from injury or working toward specific fitness goals, we design personalized exercise programs to help you achieve lasting results.
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
      <div className="px-2 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div
              className="h-48 w-full"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="p-4">
              <h2 className="font-bold mb-2 text-xl sm:text-2xl text-blue-900">{item.title}</h2>
              <p className="text-gray-400">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ServiceSection;
