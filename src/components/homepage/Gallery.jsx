import React from 'react'
import curvical from "../../assets/curvical.jpg"
import back from "../../assets/back2.jpg"
import shoulder from "../../assets/shoulder.jpg"
import elbow from "../../assets/elbow.jpg"
import surgical from "../../assets/surgical.jpeg"
import facial from "../../assets/facial.jpg"
import paralysis from "../../assets/paralysis.jpg"
import hand from "../../assets/hand.jpg"
import belly from "../../assets/belly.jpg"

const Gallery = () => {
    return (
        <div className='max-w-7xl w-11/12 mx-auto my-10'>
            <div className="flex-1 mb-4 lg:mb-0">
                <p className="text-gray-400 text-base font-normal leading-relaxed">/ Image Gallery</p>
                <h2 className="text-indigo-900 text-4xl font-bold font-manrope leading-normal text-start">
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
                    <img className="h-48 w-full object-cover rounded-lg" src={hand} alt="Image 8" />
                </div>
                <div>
                    <img className="h-48 w-full object-cover rounded-lg" src={belly} alt="Image 9" />
                </div>
            </div>
        </div>


    )
}

export default Gallery