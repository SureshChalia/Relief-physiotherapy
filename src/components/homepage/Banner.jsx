import React, { useState, useEffect } from 'react';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';

const Banner = () => {
    const banners = [banner1, banner2];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 4000);
        return () => clearTimeout(timer);
    }, [currentIndex, banners.length]);

    return (
        <div className="w-full">
            <div className="relative">
                <div className="flex space-x-4">
                    <div className="w-full h-full fade-in-out">
                        <img className="w-full h-full" src={banners[currentIndex]} alt={`banner-${currentIndex + 1}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
