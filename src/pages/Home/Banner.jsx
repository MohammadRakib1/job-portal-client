import Lottie from 'lottie-react';
import jobLottieData from '../../assets/Job Interview.json';

const Banner = () => {
    return (
        <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
            {/* Text Section */}
            <div className="max-w-xl mb-10 lg:mb-0">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Get The <span className="text-blue-600">Right Job</span><br />You Deserve
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                    Each month, more than 3 million job seekers turn to website in their search for work,
                    making over 140,000 applications every single day
                </p>

                {/* Search Bar */}
                <div className="mt-8 bg-white p-4 rounded-xl shadow-md flex flex-col lg:flex-row gap-4 items-center justify-center">
                    <div className="flex items-center gap-2 w-full lg:w-auto">
                        <select className="outline-none w-full lg:w-auto text-gray-700">
                            <option>Industry</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2 w-full lg:w-auto">
                        <select className="outline-none w-full lg:w-auto text-gray-700">
                            <option>Location</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2 w-full lg:w-auto">
                        <input
                            type="text"
                            className="outline-none w-full lg:w-auto"
                            placeholder="Your keyword..."
                        />
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
                        Search
                    </button>
                </div>

                {/* Popular Searches */}
                <div className="mt-4 text-sm text-gray-700">
                    <span className="font-semibold">Popular Searches:</span>{" "}
                    <a href="#" className="text-blue-600 underline mr-2">Designer</a>
                    <a href="#" className="text-blue-600 underline mr-2">Web</a>
                    <a href="#" className="text-blue-600 underline mr-2">iOS</a>
                    <a href="#" className="text-blue-600 underline mr-2">Developer</a>
                    <a href="#" className="text-blue-600 underline mr-2">PHP</a>
                    <a href="#" className="text-blue-600 underline mr-2">Senior</a>
                    <a href="#" className="text-blue-600 underline">Engineer</a>
                </div>
            </div>

            {/* Illustration */}
            <div className="hidden lg:block">
                <Lottie animationData={jobLottieData}></Lottie>
            </div>
        </section>
    );
};

export default Banner;