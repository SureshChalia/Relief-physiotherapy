// import React from 'react'
// import { TbPhysotherapist } from "react-icons/tb";
// import { MdHomeRepairService } from "react-icons/md";
// import { FaClipboardList } from "react-icons/fa";

// const Features = () => {
//     return (
//         <div className='bg-blue-900 rounded-md p-4 text-white flex justify-between items-center '>
//             <div className='flex gap-1 pl-2'>
//                 <div className='rounded-md p-2 border'><TbPhysotherapist className='text-6xl' /></div>
//                 <div className='text-3xl'>
//                     Expert Therapists
//                     <p className='text-lg'>Easy treatment with expert</p>
//                 </div>
//             </div>
//             <div className='flex border-l-2 gap-1 pl-6'>
//                 <div className='rounded-md p-2 border'><MdHomeRepairService className='text-6xl' /></div>
//                 <div className='text-3xl'>
//                     Home Visit
//                     <p className='text-lg'>Personalized care at your doorstep</p>
//                 </div>
//             </div>
//             <div className='flex border-l-2 gap-1 pl-6'>
//                 <div className='rounded-md p-2 border'><FaClipboardList className='text-6xl' /></div>
//                 <div className='text-3xl'>
//                 Free Consultant
//                     <p className='text-lg'>Advice with Experts</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Features

import React, { useState, useEffect } from 'react';
import { TbPhysotherapist } from "react-icons/tb";
import { MdHomeRepairService } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

const Features = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const features = [
        {
            icon: <TbPhysotherapist  />,
            title: 'Expert Physiologist',
            description: 'Easy treatment with expert'
        },
        {
            icon: <MdHomeRepairService />,
            title: 'Home Visit',
            description: 'Personalized care at your doorstep'
        },
        {
            icon: <FaClipboardList />,
            title: 'Free Consultant',
            description: 'Advice with Experts'
        }
    ];

    // Handle bullet click to set current slide
    const handleBulletClick = (index) => {
        setCurrentSlide(index);
    };

    // Automatically move to the next slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % features.length);
        }, 3000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
     <div className="bg-blue-900 mb-5">
           <div className='rounded-md p-4 text-white  overflow-hidden max-w-7xl w-11/12 mx-auto'>
            {/* Slider for small and medium screens */}
            <div className='flex md:hidden' style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                {features.map((feature, index) => (
                    <div key={index} className='min-w-full flex gap-3 justify-center items-center'>
                        <div className='rounded-md p-1 border text-5xl'>{feature.icon}</div>
                        <div className='text-xl text-start'>
                            {feature.title}
                            <p className='text-sm'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bullets for navigation on small and medium screens */}
            <div className='flex justify-center my-2 md:hidden'>
                {features.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleBulletClick(index)}
                        className={`cursor-pointer w-3 h-3 mx-1 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
                    ></div>
                ))}
            </div>

            {/* Display all features on large screens */}
            <div className='hidden md:flex justify-between'>
                {features.map((feature, index) => (
                    <div key={index} className='flex gap-3 items-center text-center'>
                        <div className='rounded-md p-2 border text-6xl'>{feature.icon}</div>
                        <div className='text-3xl text-start'>
                            {feature.title}
                            <p className='text-lg'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     </div>
    );
};

export default Features;

