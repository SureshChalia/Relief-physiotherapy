import React from 'react';
import Banner from '../homepage/Banner';
import Features from '../homepage/Features';
import AboutSection from '../homepage/AboutSection';
import ServiceSection from '../homepage/ServiceSection';
import RehablisationSection from '../homepage/RehablisationSection';
import QualityTreatmentSection from '../homepage/QualityTreatmentSection';
import ReviewSlider from '../common/ReviewSlider';
import Gallery from "../homepage/Gallery"

const Homepage = () => {
    return (
        <div className=''>
            {/* <div className='relative'>
                <div className='absolute bottom-5 w-full flex justify-center'>
                    <div className='max-w-7xl w-11/12'>
                    </div>
                </div>
            </div> */}
                <Banner />
                <AboutSection/>
                <Features />
                <ServiceSection/>
                <RehablisationSection/>
                <QualityTreatmentSection/>
                <ReviewSlider/>
                <Gallery/>
        </div>
    );
}

export default Homepage;
