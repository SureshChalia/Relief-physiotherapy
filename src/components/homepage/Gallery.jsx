import React from 'react'
import curvical from "../../assets/curvical.jpg"
import back from "../../assets/back2.jpg"
import shoulder from "../../assets/b1.jpg"
import elbow from "../../assets/b2.jpg"
import surgical from "../../assets/b3.jpg"
import facial from "../../assets/b4.jpg"
import paralysis from "../../assets/b5.jpg"
import hand from "../../assets/b6.jpg"
import belly from "../../assets/b7.jpg"

const Gallery = () => {
    return (
        <div className='max-w-7xl w-11/12 mx-auto mb-10'>
            <div className="flex-1 mb-4 lg:mb-0">
                <p className="text-gray-400 text-base font-normal leading-relaxed">/ Image Gallery</p>
                <h2 className="text-indigo-900 text-xl sm:text-4xl font-bold font-manrope  text-start">
                    Our Latest Insights and updates
                </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                <div>
                    <img className="h-48 w-full object-cover rounded-lg" src={back} alt="Image 1" />
                </div>
                <div>
                    <img className="h-48 w-full object-cover rounded-lg" src={curvical} alt="Image 2" />
                </div>
                <div>
                    <img className="h-48 w-full object-cover rounded-lg" src={shoulder} alt="Image 3" />
                </div>
                <div>
                    <img className="h-48 w-full object-cover rounded-lg" src={elbow} alt="Image 4" />
                </div>
                <div>
                    <img className="h-48 w-full object-cover rounded-lg" src={surgical} alt="Image 5" />
                </div>
                <div>
                    <img className="h-48 w-full object-cover rounded-lg" src={facial} alt="Image 6" />
                </div>
                <div>
                    <img className="h-48 w-full object-cover rounded-lg" src={paralysis} alt="Image 7" />
                </div>
                <div>
                    <img className="h-48 w-full object-contain rounded-lg" src={hand} alt="Image 8" />
                </div>
                <div>
                    <img className="h-48 w-full object-cover rounded-lg" src={belly} alt="Image 9" />
                </div>
            </div>
        </div>


    )
}

export default Gallery