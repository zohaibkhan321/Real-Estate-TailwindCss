import React from 'react';
import cityBgImg from "../../assets/city-background.png"
const NewsLetter = () => {
    return (
        <div className='max-w-screen-2xl mx-auto relative z-10' id='contact'>
            <div className="bg-[#fef6f3] p-8 flex flex-col md:flex-row items-center justify-between">
                {/* Text Section */}
                <div className="md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Find your <span className="text-orange-500">dream home</span> today!
                    </h1>
                    <p className="text-gray-700 mb-6">
                        Discover the perfect property tailored to your needs and preferences with our expert guidance.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 bg-white border border-orange-500 text-black font-medium rounded hover:bg-gray-100 transition"
                    >
                        Contact Us
                        <span className="ml-2 text-lg">➔</span>
                    </a>
                </div>

                {/* Illustration Section */}
                <div className="md:w-1/2 mt-8 md:mt-0 ">
                    <img
                        src={cityBgImg} 
                        alt="City Illustration"
                        className="w-full mx-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
