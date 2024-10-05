import React, { useState, useEffect } from 'react';

// Sample reviews data
const reviews = [
    {
        id: 1,
        name: "Rajbir Singh",
        review: "Dr Simran is doing very good practice in exercise physiologist in our city Faridkot. Last month I suffered with back pain and shoulder pain. I visit Relief physiotherapy and rehabilitation clinic. After my treatment I recovered from my all pain satisfactory. I really thankful to Dr Simran and her staff.  Excellent",
        rating: 5,
    },
    {
        id: 2,
        name: "Sukhpreet kainth",
        review: "She is doing excellent job. I had a very bad shoulder pain before but now after doing exercises at clinic I feel better now. Thank you so much proud of you.",
        rating: 5,
    },
    {
        id: 3,
        name: "Amarjeet Kaur Sra",
        review: "Wow !!! Great !!! Excellent experience i have with this physiotherapy clinic.I was badly suffered from shoulder muscle tears. But under the therapy of dr Simranjeet I recovered fully and feel relaxed. Simran has a quality  that she  understands the problem very deeply.  She is full of knowledge, professional, confident, cooperative and very kind and humble too. She came like an angle in my life.I recommend this clinic. 👌",
        rating: 5,
    },
    {
        id: 4,
        name: "Gurwinder Kaur",
        review: "Relief physiotherapy and rehabilitation clinic is best clince in our city Faridkot.  It's treatment and therapy are excellent.  Two month ago , I suffered with swear pain in neck. With the treatment by Dr Simran , I fully recovered and cure of my neck. I am fully satisfied with her treatment.",
        rating: 5,
    },
    {
        id: 5,
        name: "Arvinder Sandhu",
        review: "I was suffering from  surgical problem few months ago then I met with Dr.simranjeet kaur . It's a best experienced with Dr. I got relief from survival .thank u Dr. Simran ❤😊🙏",
        rating: 5,
    },
    {
        id: 6,
        name: "BirinderJeet Singh",
        review: "My life is better now than it was before.I appreciate all that you've done.” must visit the doctor r fully expert and coprative",
        rating: 5,
    },
    {
        id: 7,
        name: "Ripdamanjeet Singh Sidhu",
        review: "After years of back pain . Drs couldn’t do anything. Relief physio did wonders . Staff are great. They  are wonderful. . Simran is one in a million with what she has done with my spine and back issues . Highly recommend Relief physio & rehablitation 👍👍",
        rating: 5,
    },
    {
        id: 8,
        name: "sukhwinder kalsi",
        review: "Very experienced doctor I m suffring wd low back lain in one weak m feel totally fine must visit",
        rating: 5,
    },
    {
        id: 9,
        name: "Devinder Kaur",
        review: "I hv very good experience of relief from backache  form relief Physiotherapy clinic in fdk.Dr Simranjeet kaur is very experienced hand doctor . So must visit there .",
        rating: 5,
    },
    {
        id: 10,
        name: "Sukhjeet Inder Bajwa",
        review: "Very nyc doctor and good treatment iam suffring with cervical now feel relaxed after treatment must visit",
        rating: 5,
    },
    {
        id: 11,
        name: "Teena Grover",
        review: "Had a severe back pain since 2019 but now I'm greaful that I came across with well experienced doctors must visit here thanks alot",
        rating: 5,
    },
    {
        id: 12,
        name: "Parveen Vij",
        review: "Very expericed doctor m suffering wd cervical pain now m fine GD job",
        rating: 5,
    },
    {
        id: 13,
        name: "Gursharnjeet kaur saini",
        review: "Getting back to our normal life after having treatment from you✨",
        rating: 5,
    },
    {
        id: 14,
        name: "Nar Singh",
        review: "must visit totaly satisfied about her treatment nyc doctor in faridkot city",
        rating: 5,
    },
    {
        id: 15,
        name: "Paramdeep Brar",
        review: "Great experience..... Had problem of lumber spine since last 5 years ...now with well experience doctor guidance and good exercises  I overcome my problem.  ......",
        rating: 5,
    },
];

const ReviewSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevReview = () => {
        setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
    };

    const nextReview = () => {
        setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextReview();
        }, 3000); // Change review every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentIndex]);

    return (
        <div className="max-w-7xl w-11/12 mx-auto py-16 px-2">
            <div className="flex flex-col md:flex-row items-start justify-between">
                {/* Left Section */}
                <div className="w-full md:w-1/2 text-left">
                    <h4 className="text-sm text-gray-400">/ Patient Testimonial</h4>
                    <h2 className="text-xl sm:text-4xl font-bold mt-4 text-indigo-900 mb-4">
                        Our Patient Reviews
                    </h2>
                    <p className='text-gray-400'>At Relief Physiotherapy & Rehabilitation Clinic, we pride ourselves on providing exceptional exercise physiology services that deliver real, measurable results. But don't just take our word for it — our clients' success stories speak for themselves</p>
                </div>

                {/* Right Section - Review Card */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <div className="relative bg-white shadow-lg rounded-lg p-6 border border-purple-200">
                        {/* Reviewer Image */}
                        <div className="flex items-center justify-center md:justify-start">
                            <img
                                src={`https://api.dicebear.com/5.x/initials/svg?seed=${reviews[currentIndex].name}`}
                                alt={reviews[currentIndex].name}
                                className="w-16 h-16 rounded-full border-2 border-yellow-400"
                            />
                            <div className="ml-4 text-center md:text-left">
                                <h3 className="text-xl font-semibold">{reviews[currentIndex].name}</h3>
                                <p className="text-gray-500">{reviews[currentIndex].position}</p>
                            </div>
                        </div>
                        {/* Rating */}
                        <div className="mt-4 text-center md:text-left">
                            <span className="text-yellow-500">
                                {'⭐'.repeat(reviews[currentIndex].rating)}
                            </span>
                        </div>
                        {/* Review Text */}
                        <p className="mt-4 text-gray-600 text-center md:text-left">
                            {reviews[currentIndex].review}
                        </p>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex justify-center md:justify-start space-x-4 mt-8">
                        <button
                            onClick={prevReview}
                            className="border border-blue-900 text-indigo-600 rounded-full h-10 w-10 p-2 hover:bg-blue-800 hover:text-white transition"
                        >
                            &#8592;
                        </button>
                        <button
                            onClick={nextReview}
                            className="border border-blue-900 text-indigo-600 rounded-full h-10 w-10 p-2 hover:bg-blue-800 hover:text-white transition"
                        >
                            &#8594;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSlider;
