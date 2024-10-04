import React, { useState, useEffect } from 'react';
import banner1 from '../../assets/b12.jpg';
import banner2 from '../../assets/b22.jpg';
import banner3 from '../../assets/b32.jpg';
import banner4 from '../../assets/b42.jpg';
import banner5 from '../../assets/b55.jpg';
import banner6 from '../../assets/b62.jpg';
import banner7 from '../../assets/b77.jpg';

const Banner = () => {
    const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner7];
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
