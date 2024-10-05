import React, { useState, useEffect } from 'react';
import banner1 from '../../assets/ba1.jpg';
import banner2 from '../../assets/ba2.jpg';
import banner3 from '../../assets/ba3.jpg';
import banner4 from '../../assets/ba4.jpg';


const Banner = () => {
    const banners = [banner1, banner2, banner3, banner4];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 4000);
        return () => clearTimeout(timer);
    }, [currentIndex, banners.length]);

    return (
        <div className="w-full">
            <div className="w-full h-full overflow-hidden">
                <img
                    className="w-full h-full"
                    src={banners[currentIndex]}
                    alt={`banner-${currentIndex + 1}`}
                />
            </div>
    </div>
    );
};

export default Banner;
