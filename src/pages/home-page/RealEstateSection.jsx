import React from 'react';
import arrowIcon from "../../assets/arrow.png"
const RealEstateSection = () => {
    return (
        <div className="max-w-screen-2xl mx-auto lg:my-12 my-7 p-5">
            <section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Section */}
                    <div className="space-y-6">
                        <div className="max-w-md">
                            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                                Building dreams into stunning <span className="text-orange-500">real estate</span>
                            </h1>
                        </div>
                        <div className="max-w-md">
                            <p className="text-gray-800">
                                We take pride in our track record of excellence and innovation in the real estate industry. Here’s a glimpse of our notable achievements.
                            </p>
                        </div>
                        {/* Button Section */}
                        <div className="mt-7 lg:mt-12">
                            <button className="px-6 py-3 border text-gray-800 border-orange-600 flex items-center gap-2 text-sm lg:text-base font-medium rounded-md transition-transform transform hover:scale-105">
                                More About Us
                                <img
                                    src={arrowIcon}
                                    alt="Arrow Icon"
                                    className="w-4 h-4"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { count: '200+', label: 'Modern\nProperties' },
                            { count: '98%', label: 'Client\nSatisfaction' },
                            { count: '12+', label: 'Years of\nExperience' },
                            { count: '20+', label: 'Award\nWinning' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-orange-50 p-6 text-start rounded-lg shadow-md"
                            >
                                <h2 className="text-lg font-bold text-gray-800 lg:text-3xl">
                                    {item.count}
                                </h2>
                                <p className="text-gray-700 mt-2 whitespace-pre-line">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RealEstateSection;
